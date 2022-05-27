export const formatCurrency = (amount) => {
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
  let s = String(i);
  if (s.indexOf(".") < 0) {
    s += ".00";
  }
  if (s.indexOf(".") === s.length - 2) {
    s += "0";
  }
  s = minus + s;
  return s;
};
