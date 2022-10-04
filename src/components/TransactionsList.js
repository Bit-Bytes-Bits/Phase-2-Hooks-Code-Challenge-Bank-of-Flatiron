import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transaction, searchString }) {

  const filteredTransaction = transaction.filter((filtered) =>
    filtered.description.toLowerCase().includes(searchString.toLowerCase())
  );
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {filteredTransaction.map((transactionObject) => (
          <Transaction
            key={transactionObject.id}
            date={transactionObject.date}
            description={transactionObject.description}
            category={transactionObject.category}
            amount={transactionObject.amount}
            transactionObject={transactionObject}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
