"use strict";

// Seleting elements
const accountBtn = document.querySelector(".accountBtn");
const balanceBtn = document.querySelector(".balanceBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const depositBtn = document.querySelector(".depositBtn");
const exitBtn = document.querySelector(".exitBtn");
const clearBtn = document.querySelector(".clearBtn");

// Account object with user data
const account = {
    accountName: "john doe",
    balance: 100,
    getBalance: balanceBtn.addEventListener("click", () => {
        document.querySelector(
            ".output"
        ).textContent = `BALANCE: €${account.balance}`;
    }),
    deposit: depositBtn.addEventListener("click", () => {
        let inputData = parseFloat(document.getElementById("input").value);

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
            ).textContent = `NEW BALANCE: €${account.balance}`;
            document.getElementById("input").value = " ";
        }
    }),
    withdrawal: withdrawBtn.addEventListener("click", () => {
        let inputData = parseFloat(document.getElementById("input").value);

        if (isNaN(inputData) || inputData === "" || inputData % 10 !== 0) {
            document.querySelector(
                ".output"
            ).textContent = `Please enter a valid amount divisible by 10!`;
        } else if (inputData > account.balance) {
            document.querySelector(
                ".output"
            ).textContent = `Insufficient funds!`;
        } else {
            account.balance -= inputData;

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

const capitalizeAccountName = (name) => {
    const names = name.split(" ");
    const namesUpper = [];

    for (const letter of names) {
        namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
    }
    return namesUpper.join(" ");
};

clearBtn.addEventListener("click", () => {
    document.getElementById("input").value = " ";
});
