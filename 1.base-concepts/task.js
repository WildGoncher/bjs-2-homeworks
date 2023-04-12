"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    return [-b / (2 * a)];
  } else if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else {
    return [];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100;
  P = P / 12;
  let S = amount - contribution;
  let payment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  return Number(parseFloat(payment * countMonths).toFixed(2));
}
