const t = {
    "Nzc3ZDhlY2FlN2M1M2Q5NjMzNGM2YTI0MTI5MWQ4MzY=": {
      name: "Transportation",
      id: "Nzc3ZDhlY2FlN2M1M2Q5NjMzNGM2YTI0MTI5MWQ4MzY=",
    },
    "NmMyODczNmI4NjVkYTFkMWZlMzkyNDA2NWE3YTM5ZTY=": {
      name: "Airline",
      id: "NmMyODczNmI4NjVkYTFkMWZlMzkyNDA2NWE3YTM5ZTY=",
    },
    "ZDI2NDIxZjI5ZjJiMmZkMzA5OThjODI0MmJjY2ZlY2Y=": {
      name: "Restaurant",
      id: "ZDI2NDIxZjI5ZjJiMmZkMzA5OThjODI0MmJjY2ZlY2Y=",
    },
    "YzExZThhYmZkNmQ1ZjcyYTUxMzRlYjZmZmEwYjI5NGE=": {
      name: "Lodging",
      id: "YzExZThhYmZkNmQ1ZjcyYTUxMzRlYjZmZmEwYjI5NGE=",
    },
    "NTNiZTg2OTZkM2MwYzFlYjVjMzBiNjk0YzkyNGI3MDU=": {
      name: "Other",
      id: "NTNiZTg2OTZkM2MwYzFlYjVjMzBiNjk0YzkyNGI3MDU=",
    },
  },
  e = {
    "NWYyYmYwZGVjNzMyNzk1MTgyZTc3OTFkNTkwMjcyNjk=": {
      id: "NWYyYmYwZGVjNzMyNzk1MTgyZTc3OTFkNTkwMjcyNjk=",
      categoryId: "Nzc3ZDhlY2FlN2M1M2Q5NjMzNGM2YTI0MTI5MWQ4MzY=",
      accrualDate: new Date(2018, 0, 8, 10, 27, 39, 134).toJSON(),
      amountInCents: 3100,
      merchant: {
        name: "Lyft",
        website: "https://lyft.com",
        address: "San Francisco",
      },
      memo: null,
      captureMethod: "Online",
    },
    "MzM2YTAwMzIyYmMwMTYwN2ZiZGMzM2VjZTU5MGM2MzA=": {
      id: "MzM2YTAwMzIyYmMwMTYwN2ZiZGMzM2VjZTU5MGM2MzA=",
      categoryId: "ZDI2NDIxZjI5ZjJiMmZkMzA5OThjODI0MmJjY2ZlY2Y=",
      accrualDate: new Date(2018, 0, 8, 18, 12, 58, 789).toJSON(),
      amountInCents: 978,
      merchant: {
        name: "Starbucks",
        website: "https://starbucks.com",
        address: "San Francisco",
      },
      memo: null,
      captureMethod: "Online",
    },
    "YzcyN2UxOWE2NzA5YjAyN2ExM2M2ZTEwM2ZlMzYyY2E=": {
      id: "YzcyN2UxOWE2NzA5YjAyN2ExM2M2ZTEwM2ZlMzYyY2E=",
      categoryId: "YzExZThhYmZkNmQ1ZjcyYTUxMzRlYjZmZmEwYjI5NGE=",
      accrualDate: new Date(2018, 0, 1, 20, 19, 36, 462).toJSON(),
      amountInCents: 3e4,
      merchant: {
        name: "Wellington Hotel",
        website: "https://wellingtonhotel.com",
        address: "San Francisco",
      },
      memo: null,
      captureMethod: "Online",
    },
    "Njc3NDQ1ZmFmOTBmNzkwOTBmYzFmNjMxYWU5YjRhNmY=": {
      id: "Njc3NDQ1ZmFmOTBmNzkwOTBmYzFmNjMxYWU5YjRhNmY=",
      categoryId: "NmMyODczNmI4NjVkYTFkMWZlMzkyNDA2NWE3YTM5ZTY=",
      accrualDate: new Date(2018, 0, 7, 22, 1, 46, 995).toJSON(),
      amountInCents: 52359,
      merchant: {
        name: "American Airlines",
        website: "https://americanairlines.com",
        address: "Dallas",
      },
      memo: null,
      captureMethod: "In Person",
    },
    "NjA0MDUwZDk0NzYzYTE2MGFlZWUwOWZlMGIzNWE4ZTU=": {
      id: "NjA0MDUwZDk0NzYzYTE2MGFlZWUwOWZlMGIzNWE4ZTU=",
      categoryId: "NmMyODczNmI4NjVkYTFkMWZlMzkyNDA2NWE3YTM5ZTY=",
      accrualDate: new Date(2018, 0, 7, 3, 5, 28, 631).toJSON(),
      amountInCents: 49900,
      merchant: {
        website: "https://unitedairlines.com",
        name: "United Airlines",
        address: "San Francisco",
      },
      memo: null,
      captureMethod: "Online",
    },
    "YmY1MThlYzBmMWM0ZDFjOGVlMDgyN2I3NjgzMmZlNTY=": {
      id: "YmY1MThlYzBmMWM0ZDFjOGVlMDgyN2I3NjgzMmZlNTY=",
      categoryId: "NTNiZTg2OTZkM2MwYzFlYjVjMzBiNjk0YzkyNGI3MDU=",
      accrualDate: new Date(2018, 0, 15, 0, 17, 55, 729).toJSON(),
      amountInCents: 599,
      merchant: {
        website: "https://uber.com",
        name: "Uber",
        address: "San Francisco",
      },
      memo: null,
      captureMethod: "Online",
    },
  },
  n = (() => {
    let n = { transactions: { ...e }, categories: { ...t } };
    const a = () => {
      const t = localStorage.getItem("transactionState");
      t && (n = JSON.parse(t));
    };
    return (
      a(),
      {
        categories: () => n.categories,
        transactions: () => n.transactions,
        load: a,
        save: () => {
          localStorage.setItem("transactionState", JSON.stringify(n));
        },
        updateTransaction(t, e, a) {
          n = {
            ...n,
            transactions: {
              ...n.transactions,
              [t]: { ...n.transactions[t], [e]: a },
            },
          };
        },
      }
    );
  })();
export async function getTransactions() {
  return new Promise((t) => {
    setTimeout(() => t(n.transactions()), 200);
  });
}
export async function getCategories() {
  return new Promise((t) => {
    setTimeout(() => t(n.categories()), 200);
  });
}
export async function setTransactionCategory(t, e) {
  if (!n.transactions()[t]) throw new Error("Transaction ID not found");
  return new Promise((a) => {
    setTimeout(
      () => (
        // eslint-disable-next-line no-sequences
        n.updateTransaction(t, "categoryId", e),
        n.save(),
        a(n.transactions()[t])
      ),
      200
    );
  });
}
export async function setTransactionMemo(t, e) {
  if (!n.transactions()[t]) throw new Error("Transaction ID not found");
  return new Promise((a) => {
    setTimeout(
      () => (
        // eslint-disable-next-line no-sequences
        n.updateTransaction(t, "memo", e), n.save(), a(n.transactions()[t])
      ),
      200
    );
  });
}
