import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import {useSate} from "react";

function AccountContainer() {
  // const [transaction, setTransaction] = useSate([])
  function fetchTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then((data)=> console.log(data))
  }

  fetchTransactions()
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
