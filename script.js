"use strict";

// Seleting elements
const accountBtn = document.querySelector(".accountBtn");
const balance = document.querySelector(".balance");
const withdraw = document.querySelector(".withdraw");
const deposit = document.querySelector(".deposit");
const exit = document.querySelector(".exit");
const enter = document.querySelector(".enter");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

const account = {
  accountName: "john doe",
  balance: 100,
  getBalance: function () {},
  deposit: function () {},
  withdrawal: function () {},
  getAccountName: function () {},
  accountError: function () {},
  exitAccount: function () {},
};

// Capitalize account holder name
const capitalizeAccountName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return namesUpper;
};

// Get account details and display on page
const userData = accountBtn.addEventListener("click", function () {
  document.querySelector(
    ".output"
  ).textContent = `Account Holder: ${capitalizeAccountName(
    account.accountName
  )}`;
});

function atm() {
  let choice = parseInt();
  //prompt("Please select a transaction: BALANCE, DEPOSIT or WITHDRAWAL")
  //prompt user for choice.

  // you can use the variable choice for your switch or if/else statement
  // so choice will hold the value of the user input.
}

// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
// function atm() {
//   let choice = parseInt(prompt("Display menu choices here"));
//prompt user for choice.

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.
// }
