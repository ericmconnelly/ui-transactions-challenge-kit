import React, { useState } from "react";
import { TransactionHeader } from "./TransactionHeader";
import { TransactionBody } from "./TransactionBody";

export const Transaction = ({
  transaction,
  category,
  categories,
  onChange,
}) => {
  const [showBody, setShowBody] = useState(true);

  const handleClickHeader = () => {
    setShowBody(!showBody);
  };

  return (
    <div className="transaction-item">
      <div onClick={handleClickHeader}>
        <TransactionHeader
          merchant={transaction.merchant}
          amount={transaction.amountInCents}
          date={transaction.accrualDate}
          memo={transaction.memo}
          category={category}
          captureMethod={transaction.captureMethod}
        />
      </div>
      <TransactionBody
        onChange={onChange}
        isShow={showBody}
        memo={transaction.memo}
        transactionId={transaction.id}
        categories={categories}
        merchant={transaction.merchant}
        category={category}
        captureMethod={transaction.captureMethod}
      />
    </div>
  );
};
