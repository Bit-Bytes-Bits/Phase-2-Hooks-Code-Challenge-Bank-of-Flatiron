import React from "react";
import {useState} from "react";

function AddTransactionForm({submit}) {

  const [addTransaction, setAddTransaction] = useState({
    date:"",
    category:"",
    amount:"null",
    description:""
  })
  function handleFormData(event){
    setAddTransaction({...addTransaction, [event.target.name]:event.target.value})
  }

  function submitData(event){
    event.preventDefault()
    submit(addTransaction)
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onBlur={handleFormData} />
          <input type="text" name="description" placeholder="Description" onBlur={handleFormData} />
          <input type="text" name="category" placeholder="Category" onBlur={handleFormData} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onBlur={handleFormData} />
        </div>
        <button className="ui button" type="submit" onClick={submitData}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
