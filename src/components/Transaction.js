import React from "react";

function Transaction({transactionObject}) {
  const {id, date, description, category, amount}= transactionObject;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
