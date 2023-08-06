import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  //const[userInput,SetUserInput] = useState({
  //  setEnterTitle:"",
  // setEnterAmount:"",
  //setEnterDate:""
  //});

  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);

    //SetUserInput({
    //  ...userInput,
    //  setEnterTitle: event.target.value,
    //})

    //SetUserInput((prevState) =>  {
    //  return {...prevState,setEnterTitle:event.target.value};
    //});
  }

  function amountChangeHandler(event) {
    setEnterAmount(event.target.value);
    //SetUserInput({
    // ...userInput,
    //setEnterAmount: event.target.value,
    //})
  }

  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
    //SetUserInput({
    // ...userInput,
    //setEnterDate: event.target.value,
    //})
  }

  //function inputChangeHandler(identifier, value) {
  //if (identifier == "title") {
  // setEnterTitle(value);
  //} else if (identifier == "date") {
  //setEnterDate(value);
  //} else {
  //setEnterAmount(value);
  //}
  //}

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="Text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
