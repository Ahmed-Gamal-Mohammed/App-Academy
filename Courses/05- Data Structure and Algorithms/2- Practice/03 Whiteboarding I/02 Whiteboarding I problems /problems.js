// Time complexity O() ..... Space complexity O()
function logBetween(lowNum,highNum){
    let result = [];

    for(let i= lowNum; i <= highNum; ++i){
        result.push(i);
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function logBetweenSteeper(lowNum,highNum,step){
    let result = [];

    for(let i= lowNum; i <= highNum; i += step){
        result.push(i);
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function printReverse(min,max){
    let result = [];

    for(let i= max -1; i > min; i -= 1){
        result.push(i);
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function fizzBuzz(max){
    let result = [];

    for (let i = 3; i <= max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result.push(i);
        }else if (i % 3 !== 0 && i % 5 === 0) {
            result.push(i);
        }
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function isPrime(number){
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Time complexity O() ..... Space complexity O()
function maxValue(array){
    let max_val = array[0];

    for (let i = 1; i < array.length; i++) {
        if (max_val < array[i]) {
            max_val = array[i];
        }
    }

    return max_val;
}

// Time complexity O() ..... Space complexity O()
function myIndexOf(array,target){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

// Time complexity O() ..... Space complexity O()
function factorArray(array,number){

    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (number % element === 0) {
            result.push(element);
        }
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function oddRange(end){
    let result = [];
    for (let i = 1; i < end; i+=2) {

        result.push(i);
    }

    return result;
}

// Time complexity O() ..... Space complexity O()
function reverseHyphenString(string) {
    // Split the string into an array using "-" as the delimiter
    let array = string.split("-");

    // Reverse the array
    array.reverse();

    // Join the array back into a string with "-" as the delimiter
    return array.join("-");
}

// Time complexity O() ..... Space complexity O()
function factorArray(array, number) {
    // Initialize an empty array to store the factors
    let factors = [];

    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
      // Check if the current element is a factor of the given number
      if (number % array[i] === 0) {
        // If it is, add it to the factors array
        factors.push(array[i]);
      }
    }

    // Return the array of factors
    return factors;
}

// Time complexity O() ..... Space complexity O()
function mirrorArray(array) {
    // Create a copy of the original array and reverse it
    const reversedArray = array.slice().reverse();

    // Concatenate the original array with the reversed array
    const mirroredArray = array.concat(reversedArray);

    // Return the mirrored array
    return mirroredArray;
}

function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Split the sentence into an array of words
    const words = sentence.split(" ");

    // Process each word
    const abbreviatedWords = words.map(word => {
      if (word.length > 4) {
        // Remove vowels from the word
        return word
          .split("")
          .filter(char => !vowels.includes(char))
          .join("");
      } else {
        // Return the word as is
        return word;
      }
    });

    // Join the words back into a sentence
    return abbreviatedWords.join(" ");
}

function adults(people) {
    // Initialize an empty array to store the names of adults
    const adultNames = [];

    // Loop through each person object in the array
    for (let person of people) {
      // Check if the person's age is 18 or higher
      if (person.age >= 18) {
        // If yes, add their name to the adultNames array
        adultNames.push(person.name);
      }
    }

    // Return the array of adult names
    return adultNames;
}

function countScores(people) {
    // Initialize an empty object to store the total scores
    const scores = {};

    // Loop through each score object in the array
    for (let person of people) {
      const name = person.name;
      const score = person.score;

      // If the name already exists in the scores object, add the score
      if (scores[name]) {
        scores[name] += score;
      } else {
        // If the name does not exist, initialize it with the current score
        scores[name] = score;
      }
    }

    // Return the object with total scores
    return scores;
}


function firstNPrimes(num){

}

function peakFinder(array){

}

function divisibleByThreePairSum(array){

}


function zipArray(arr1,arr2){

}

function twoDimensionalTotal(array){

}

function countInnerElement(arr){

}

function twoDiff(array){

}

function arrayDiff(arr1, arr2){

}



function valueCounter(obj, val){

}

function elementCount(array){

}

function nextTwoPrimes(num){

}

function pairProduct(arr, num){

}

function twoDimensionalSize(array){

}

function longWordCount(string){

}

function factorial(n){

}

function lcm(num1, num2){

}

function hipsterfyWord(word){

}

function hipsterfy(sentence){

}

function objectToString(count){

}

function shortestWord(sentence){

}

function greatestCommonFactor(num1, num2){

}


function isPassing(assessments){

}


function valueConcat(array, obj){

}

function threeInARow(arr){

}

function variableNameify(words){

}

function threeIncreasing(arr){

}


function reverse2D(array){

}

function reverb(word){

}

function countRepeats(string){

}

function pairsToString(arr){

}

function countAdjacentSums(arr, n){

}

function signFlipCount(nums){

}

function powerSequence(base, length){

}

function collapseString(str){

}

function oddWordsOut(sentence){

}

function mindPsAndQs(str){

}

function commonFactors(num1, num2){

}

function commonPrimeFactors(num1, num2){

}

function splitHalfArray(array){

}

function threeUniqueVowels(string){

}

function vowelShift(sentence){

}

function hasSymmetry(array){

}

function evenSumArray(array){

}

function numsToWords(numString){

}

function moreDotLessDash(str){

}
