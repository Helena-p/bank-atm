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
        // Get value from input field on btn click event
        // parseFloat is used to take a string and return a number
        // if a symbol is entered that it can not parse, NaN is returned
        let inputData = parseFloat(document.getElementById("input").value);
        // Errorhandling in case of incorrect data
        // if/else is used here because there is few conditions to be evaluated and
        // therefor I find an if/else statement to relevant
        if (
            isNaN(inputData) ||
            inputData < 0 ||
            inputData === "" ||
            inputData % 10 !== 0
        ) {
            document.querySelector(
                ".output"
            ).textContent = `Please enter a valid amount divisible by 10!`;
        } else {
            // Add value to balance
            account.balance += inputData;
            // Display new balance to user
            document.querySelector(
                ".output"
            ).textContent = `NEW BALANCE: ${account.balance}€`;
            document.getElementById("input").value = " ";
        }
    }),
    withdrawal: withdrawBtn.addEventListener("click", () => {
        // Get value from input field on btn click event
        let inputData = parseFloat(document.getElementById("input").value);
        // Errorhandling in case of incorrect data
        // if/else is used here because there is few conditions to be evaluated and
        // therefor I find an if/else statement to relevant
        if (isNaN(inputData) || inputData === "" || inputData % 10 !== 0) {
            document.querySelector(
                ".output"
            ).textContent = `Please enter a valid amount divisible by 10!`;
        } else if (inputData > account.balance) {
            document.querySelector(
                ".output"
            ).textContent = `Insufficient funds!`;
        } else {
            // Subtract value from balance
            account.balance -= inputData;
            // Display new balance to user
            document.querySelector(
                ".output"
            ).textContent = `NEW BALANCE: €${account.balance}`;
            document.getElementById("input").value = " ";
        }
    }),
    getAccountName: accountBtn.addEventListener("click", () => {
        document.querySelector(
            ".output"
        ).textContent = `ACCOUNT HOLDER: ${capitalizeAccountName(
            account.accountName
        )}`;
    }),
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

/* 

Notes:
 I decided to place errorhandling in the if/else statements inside the function of deposit and withdraw, since I chose not to set the communication to the user via prompt I found that to be more practible.

 The use of 'this'returned NaN, I tried to find a solution for that, the only thing I could think of is that I have set the document to 'use strict'?... That I recieve NaN is telling me that 'this' does not point to the correct object.  

*/
