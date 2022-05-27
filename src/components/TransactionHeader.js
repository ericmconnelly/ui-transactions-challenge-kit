import React from "react";
import { MemoLogo } from "./MemoLogo";

function formatCurrency(amount) {
  let i = parseFloat(amount);
  if (isNaN(i)) {
    i = 0.0;
  }
  let minus = "";
  if (i < 0) {
    minus = "-";
  }
  i = Math.abs(i);
  i = parseInt((i + 0.005) * 100);
  i = i / 100;
  let s = new String(i);
  if (s.indexOf(".") < 0) {
    s += ".00";
  }
  if (s.indexOf(".") === s.length - 2) {
    s += "0";
  }
  s = minus + s;
  return s;
}

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
              <MemoLogo isShow={!!memo}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
