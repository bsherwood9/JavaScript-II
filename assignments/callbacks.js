// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

//const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}
const test1 = getLength(items, item => console.log(item));

//Number 2
LoveToChew = item => `I love to chew ${item}`;

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
  // last passes the last item of the array into the callback.
}
console.log(last(items, LoveToChew));

//Number 3 // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  let sum = x + y;
  return cb(sum);
}
sumNums(1, 2, item => {
  console.log(item);
});

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  let total = x * y;
  return cb(total);
}
multiplyNums(5, 6, item => console.log(`The total will be ${item}`));

//--------------
function contains(item, list, cb) {
  const isInList = list.some(element => element == item);
  // cb(list.some(element => element == item))
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(isInList);
}
let CheckList = item => {
  if (item) {
    console.log("IT IS TRULY IN THE LIST.");
  } else {
    console.log("IT IS NOT IN THE LIST...");
  }
};

contains("Pencil", items, CheckList);

/* STRETCH PROBLEM */
const nums = [1, 2, 3, 4, 5, 6, 6, 6];

function removeDuplicates(array, cb) {
  const table = {};
  array.forEach(item => {
    if (item in table) {
      table[item] = table[item] + 1;
    } else {
      table[item] = 1;
    }
  });

  cb(Object.keys(table));
}

removeDuplicates(nums, item => console.log(item));
// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.
