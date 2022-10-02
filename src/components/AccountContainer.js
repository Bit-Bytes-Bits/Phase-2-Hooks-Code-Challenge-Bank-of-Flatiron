import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import {useState} from "react";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then((data)=> {
      setTransaction(data)
    })
  }

useEffect(()=> {
  fetchTransactions()
}, [])

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transaction={transaction}/>
    </div>
  );
}

export default AccountContainer;
