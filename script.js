"use strict";

// Seleting elements
const accountBtn = document.querySelector(".accountBtn");
const balanceBtn = document.querySelector(".balanceBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const depositBtn = document.querySelector(".depositBtn");
const exitBtn = document.querySelector(".exitBtn");
const clearBtn = document.querySelector(".clearBtn");
const input = document.getElementById("input");
const output = document.querySelector(".output");

// Account object with user data
const account = {
    accountName: "john doe",
    balance: 100,
    getBalance: balanceBtn.addEventListener("click", () => {
        document.querySelector(
            ".output"
        ).textContent = `BALANCE: ${account.balance}€`;
    }),
    deposit: depositBtn.addEventListener("click", () => {
        // get value from input field on btn click event
        // parseFloat is used to take a string and return a number
        // if a symbol is entered that it cannot parse, NaN is returned
        let inputData = parseFloat(document.getElementById("input").value);
        // errorhandling in case of incorrect data
        // if/else is used because there is few conditions to be evaluated and
        // therefor I find an if/else statement to be useful
        if (isNaN(inputData) || inputData < 0 || inputData === "") {
            document.querySelector(
                ".output"
            ).textContent = `Please enter a valid number!`;
        } else {
            // Add value to balance
            account.balance += inputData;
            // display new balance to user
            document.querySelector(
                ".output"
            ).textContent = `NEW BALANCE: ${account.balance}€`;
        }
    }),
    withdrawal: withdrawBtn.addEventListener("click", () => {
        // get value from input field on btn click event
        let inputData = parseFloat(document.getElementById("input").value);
        // errorhandling in case of incorrect data
        if (isNaN(inputData) || inputData === "") {
            document.querySelector(
                ".output"
            ).textContent = `Please enter a valid number!`;
        } else {
            // Add value to balance
            account.balance -= inputData;
            // display new balance to user
            document.querySelector(
                ".output"
            ).textContent = `NEW BALANCE: ${account.balance}€`;
        }
    }),
    getAccountName: accountBtn.addEventListener("click", () => {
        document.querySelector(
            ".output"
        ).textContent = `ACCOUNT HOLDER: ${capitalizeAccountName(
            account.accountName
        )}`;
    }),
    accountError: function () {},
    exitAccount: exitBtn.addEventListener("click", () => {
        return window.location.assign("home.html");
    }),
};

// Capitalize account holder name by dividing name
// and change first index to uppercase, then rejoin as string
const capitalizeAccountName = (name) => {
    const names = name.split(" ");
    const namesUpper = [];

    for (const letter of names) {
        namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
    }
    return namesUpper.join(" ");
};

// Clear button functionality
clearBtn.addEventListener("click", () => {
    document.getElementById("input").value = " ";
});

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
// isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
// alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.
