import React, { useState } from "react";
import { setTransactionCategory } from "../api";

export const TransactionDetails = ({
  transactionId,
  merchant,
  category,
  captureMethod,
  onChange,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const handleSelectCategory = (e) => {
    const categoryIndex = categories.findIndex(ct => ct.name === e.target.value);
    const categoryId = categories[categoryIndex].id;

    setSelectedCategory(e.target.value);
    setTransactionCategory(transactionId, categoryId);
    onChange(transactionId, {categoryId});
  };

  return (
    <div className="transaction-detail">
      <h5 className="transaction-detail-header">DETAILS</h5>
      <div className="transaction-detail-body">
        <div className="transaction-detail-row">
          <span className="transaction-row-before">Transaction Type</span>
          <span className="transaction-row-after">{captureMethod}</span>
        </div>
        <div className="transaction-detail-row">
          <span className="transaction-row-before">Merchant Address</span>
          <span className="transaction-row-after">{merchant.address}</span>
        </div>
        <div className="transaction-detail-row">
          <span className="transaction-row-before">Merchant Name</span>
          <span className="transaction-row-after">{merchant.name}</span>
        </div>
        <div className="transaction-detail-row">
          <div className="transaction-row-before">Website</div>
          <a
            className="transaction-row-after website"
            href={merchant.website}
            target="_blank"
            rel="noreferrer"
          >
            {merchant.website}
          </a>
        </div>
        <div className="transaction-detail-row">
          <div className="transaction-row-before">Category</div>
          <select
            className="transaction-row-category"
            value={selectedCategory}
            onChange={(e) => handleSelectCategory(e)}
          >
            {categories.map((ct) => (
              <option key={ct.name} id={ct.id}>{ct.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
