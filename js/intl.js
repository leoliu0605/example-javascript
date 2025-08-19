// Intl.js - Example of using the Intl API for formatting numbers and currencies
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl

const number = 123456.789;
console.log(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number),);
// $123,456.79
console.log(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'TWD'}).format(number),);
// NT$123,456.79
console.log(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'CNY'}).format(number),);
// CN¥123,456.79
