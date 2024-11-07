const mn = document.getElementById("month-name");
const dnm = document.getElementById("day-name");
const dn = document.getElementById("day-number");
const y = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

mn.innerText = date.toLocaleString("en", {month:"long"});
dnm.innerText = date.toLocaleString("en", {weekday:"long"});
dn.innerText = date.getDate();
y.innerText = date.getFullYear();