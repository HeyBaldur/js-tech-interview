'use strict';
const numberArr = [2, 3, 6, 8, 7, 8, 10, 22, 55];
const myString = 'Hello everybody I am a super developer';

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
            debugger;
            longestWord = strSplit[i].length;
            wordToShow = strSplit[i];
        }
    }
    return `The word is: ${wordToShow}`;
}



