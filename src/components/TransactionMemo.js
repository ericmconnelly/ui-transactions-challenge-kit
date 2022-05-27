import React, { useState } from "react";
import { setTransactionMemo } from "../api";

export const TransactionMemo = ({ memo, transactionId, onChange }) => {
  const memoTxt = memo === null ? "No memo for this transaction" : memo;
  const [memoValue, setMemoValue] = useState(memoTxt);

  const handleTextChange = (e) => {
    setMemoValue(e.target.value);
  };

  const handleClickSave = () => {
    setTransactionMemo(transactionId, memoValue)
    onChange(transactionId, {memo: memoValue})
  };

  return (
    <div className="transaction-memo">
      <div className="transaction-memo-top">
        <h5 className="transaction-detail-header">MEMO</h5>
        <textarea
          className="transaction-memo-text-area"
          value={memoValue}
          onChange={handleTextChange}
        />
      </div>
      <div className="transaction-memo-bottom">
        <button className="transaction-memo-save-btn" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};
