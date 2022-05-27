import React from "react";
import { MemoLogo } from "./MemoLogo";
import { formatCurrency } from "../formatCurrency";

export const TransactionHeader = ({
  merchant,
  amount,
  date,
  memo,
  category,
  captureMethod,
}) => {
  const dateStr = new Date(date).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="transaction-header">
      <h4 className="merchant-name">{merchant.name}</h4>
      <div className="transaction-details">
        <div className="transaction-details-before">
          <span className="transaction-date">{dateStr}</span>
          <span className="transaction-category">{category}</span>
          <span className="transaction-capture">{captureMethod}</span>
        </div>
        <div className="transaction-details-after">
          <span className="transaction-amount">{`$${formatCurrency(
            amount / 100
          )}`}</span>
          <div className="transaction-details-memo">
            <div className="transaction-memo">
              <MemoLogo isShow={!!memo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
