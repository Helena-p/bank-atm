"use strict";

// Seleting elements
const accountBtn = document.querySelector(".accountBtn");
const balanceBtn = document.querySelector(".balanceBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const depositBtn = document.querySelector(".depositBtn");
const exitBtn = document.querySelector(".exitBtn");
const enterBtn = document.querySelector(".enterBtn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

// Account object with user data
const account = {
    accountName: "john doe",
    balance: 100,
    getBalance: balanceBtn.addEventListener("click", function () {
        document.querySelector(
            ".output"
        ).textContent = `BALANCE: ${account.balance}€`;
    }),
    deposit: function () {},
    withdrawal: function () {},
    getAccountName: accountBtn.addEventListener("click", function () {
        document.querySelector(
            ".output"
        ).textContent = `ACCOUNT HOLDER: ${capitalizeAccountName(
            account.accountName
        )}`;
    }),
    accountError: function () {},
    exitAccount: function () {},
};

// Capitalize account holder name by dividing name
// and change first index to uppercase, then rejoin as string
const capitalizeAccountName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const letter of names) {
        namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
    }
    return namesUpper.join(" ");
};

// Deposit
depositBtn.addEventListener("click", function () {
    // 1) get value from input field on enter btn click event
    // 2) add value to balance
    // 3) display new balance to user
    // 4) errorhandling in case of incorrect data
});

// Withdrawal
withdrawBtn.addEventListener("click", function () {
    // 1) get value from input field on enter btn click event
    // 2) subtract value from balance
    // 3) display new balance to user
    // 4) errorhandling in case of incorrect data
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
