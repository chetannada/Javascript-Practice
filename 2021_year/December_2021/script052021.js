// 10 days of Javascript Tutorial in Hackerrank

// Day 9: Binary Calculator
btnClr.onclick = function () {
  res.innerHTML = "";
};
btnEql.onclick = function () {
  let value = res.innerHTML;
  value = Math.floor(eval(value.replace(/([01]+)/g, "0b$1"))).toString(2);
  res.innerHTML = value;
};
btn0.onclick = function () {
  res.innerHTML += "0";
};
btn1.onclick = function () {
  res.innerHTML += "1";
};
btnSum.onclick = function () {
  res.innerHTML += "+";
};
btnSub.onclick = function () {
  res.innerHTML += "-";
};
btnMul.onclick = function () {
  res.innerHTML += "*";
};
btnDiv.onclick = function () {
  res.innerHTML += "/";
};
