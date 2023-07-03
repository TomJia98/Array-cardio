// Challenge 1: Reverse an Array
// Write a function that takes an array as an input and returns a new array with the same elements in reverse order.
// Example input: [1, 2, 3, 4, 5]
// Expected output: [5, 4, 3, 2, 1]

const reverse = (inputArr) => {
  reversedArr = [];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    reversedArr.push(inputArr[i]);
  }
  return reversedArr;
};

testArr1 = [1, 2, 7, 4, 5];
//console.log(reverse(testArr1));
//or you could do arr.reverse()

//challenge 2 rewrite
// find the missing numbers using the largest number in the array as the head
// Challenge 2: Find Missing Numbers
// Given an array of integers where each value 1 <= x <= len(array) is unique and represents a number in the sequence, find all the missing numbers.
// Example input: [3, 7, 1, 2, 8, 4, 5]
// Expected output: [6, 9, 10]

const findMissingNumbersInArray = (inputArr) => {
  //find the highest number, it should be the first in the array after this sort function
  inputArr.sort();
  const highestNum = inputArr[inputArr.length - 1];
  const notInArr = [];
  for (let i = 1; i < highestNum; i++) {
    if (!inputArr.includes(i)) {
      notInArr.push(i);
    }
  }
  return notInArr;
};

//console.log(findMissingNumbersInArray(testArr1));

// Challenge 3: Find Duplicates
// Write a function that takes an array of integers as input and returns an array of all the duplicate numbers.
const input = [1, 2, 3, 4, 4, 5, 6, 6, 7];
// Expected output: [4, 6]

const findDuplicate = (inputArr) => {
  let duplicatesArray = [];

  for (let i = 0; i < inputArr.length - 1; i++) {
    const currentNum = inputArr[i];
    if (inputArr.includes(currentNum, i + 1)) {
      duplicatesArray.push(currentNum);
    }
  }
  return duplicatesArray;
};
//console.log(findDuplicate(input));

// Challenge 4: Sum of Two Values
// Write a function that takes an array of integers and a target integer, it should find two integers in the array that sum to the target integer. The function should return an array of these two integers.
// Example input: [1, 2, 3, 4, 5], 7
// Expected output: [2, 5]

const sumOfTwoIntegers = (inputArray, targetNumber) => {
  let resultArr = [];

  for (let first = 0; first < inputArray.length; first++) {
    for (let second = 0; second < inputArray.length; second++) {
      if (first == second) {
        continue;
      }
      const sum = inputArray[first] + inputArray[second];
      if (sum == targetNumber) {
        resultArr.push(inputArray[first]);
        resultArr.push(inputArray[second]);
        break;
      }
    }
  }
  return resultArr;
};

console.log(sumOfTwoIntegers([1, 2, 3, 4, 5], 7));
// Challenge 5: Array Chunking
// Write a function that splits an array into subarray chunks of a specified size.
// Example input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3
// Expected output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// Challenge 6: Flatten Nested Arrays
// Write a function that flattens an array of nested arrays into a single array.
// Example input: [[1, 2, [3]], 4, [5, 6, [7, 8, [9]]]]
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Challenge 7: Array Intersection
// Write a function that returns the intersection of two arrays (i.e., the elements that are common to both arrays).
// Example input: [1, 2, 3, 4, 5], [4, 5, 6, 7, 8]
// Expected output: [4, 5]
