import React from "react";
import { TransactionDetails } from "./TransactionDetails";
import { TransactionMemo } from "./TransactionMemo";

export const TransactionBody = ({
  isShow,
  merchant,
  category,
  captureMethod,
  categories,
  transactionId,
  onChange,
  memo
}) => {
  return (
    <div className={`transaction-body ${isShow ? "show" : ""}`}>
      <TransactionDetails
        transactionId={transactionId}
        categories={categories}
        merchant={merchant}
        category={category}
        captureMethod={captureMethod}
        onChange={onChange}
      />
      <TransactionMemo transactionId={transactionId} memo={memo} onChange={onChange} />
    </div>
  );
};
