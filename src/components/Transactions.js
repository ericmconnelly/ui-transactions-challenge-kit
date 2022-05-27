import React, { useEffect, useState, useMemo } from "react";
import { Transaction } from "./Transaction";
import { getTransactions, getCategories } from "../api/";

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getTransactions().then((newTransactions) =>
      setTransactions(newTransactions)
    );
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const transactionArray = useMemo(() => {
    return Object.values(transactions);
  }, [transactions]);

  const categoriesArray = useMemo(() => {
    return Object.values(categories);
  }, [categories]);

  const onChangeTransaction = (transactionId, changes) => {
    setTransactions((oldTransactions) => ({
      ...oldTransactions,
      [transactionId]: {
        ...oldTransactions[transactionId],
        ...changes
      },
    }));
  };

  return (
    <div className="transaction-container">
      <h3 className="App-header">YOUR TRANSACTIONS</h3>
      {transactionArray.map((transaction) => (
        <Transaction
          onChange={onChangeTransaction}
          key={transaction.id}
          transaction={transaction}
          category={categories[transaction.categoryId].name}
          categories={categoriesArray}
          onChangeTransaction={onChangeTransaction}
        />
      ))}
    </div>
  );
};
