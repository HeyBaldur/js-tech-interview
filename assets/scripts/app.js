'use strict';
const numberArr = [2, 3, 6, 8, -33, 7, 8, 10, 22, 55, -44, -1, -5];
const myString = 'Hello everybody I am a super developer';
const myWord1 = 'racecar';
const myWord2 = 'table';

// First function
// Calculate the sum of numbers in an array of numbers
function arrSum(arr1) {
    let sum = 0;
    arr1.forEach(e => {
        return sum += e;
    });
    return sum;
}

// Second function
// Create a function that will convert from Fahrenheit to Celsius
// Formula: °C = (°F - 32) / 1.8
function getCelsius(fh) {
    const celsius = (fh - 32) / 1.8;
    return `The celsius result is ${celsius.toFixed(4)}°, aprrox`;
}

// Third function
// Create a function that will convert from Celsius to Fahrenheit
// Formula: °F = (°C * 9/5) + 32
function getFahrenheit(cs) {
    const fahrenheit = (cs * (9 / 5)) + 32;
    return `The fahrenheit result is ${fahrenheit.toFixed(4)}°, aprrox`;
}

// Fourth function
//  Create a function to return the longest word(s) in a string
function findLongestWord(str) {
    const strSplit = str.split(' ');
    let longestWord = 0;
    let wordToShow;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            wordToShow = strSplit[i];
        }
    }
    return `The word is: ${wordToShow}`;
}

// Fifth function
// Create a Palindrome
function palindrome(word) {
    word = word.toLowerCase();
    return (word === word.split('').reverse().join('')); 
}

// Sixth
// Create a function that recieves an array of numbers and 
// return a new array with the positive numbers
// Using abs
function getPositveNumbers(arr) {
    let positiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Math.abs(arr[i])) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}

// Using sign
function getPositveNumbers2(arr) {
    let positiveNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (1 === Math.sign(arr[i])) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}


