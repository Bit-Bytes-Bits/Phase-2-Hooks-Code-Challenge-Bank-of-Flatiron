import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import { useState } from "react";

function AccountContainer() {
  const [transaction, setTransaction] = useState([]);
  const [searchString, setSearch] = useState("");
  function fetchTransactions() {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransaction(data);
      });
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  function handleFormSubmit(dataObject) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...dataObject,
        "amount": parseInt(dataObject.amount)
      })
    }).then(() => fetchTransactions());
  }

  return (
    <div>
      <Search setSearch={setSearch} />
      <AddTransactionForm submit={handleFormSubmit} />
      <TransactionsList  searchString={searchString} transaction={transaction} />
    </div>
  );
}

export default AccountContainer;
