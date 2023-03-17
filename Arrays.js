
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
let arr1 = [3,7,34,90,12];
console.log(arr1.slice(-1));

// arr2 = [true, "green", "where",12,56]
arr2 = [true, "green", "where",12,56];
console.log(arr2.slice(-1));


// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
let myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join(" ,"));



// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());



// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];

var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let fruitsArray= [];
arr.forEach(function (arr) {

if (!fruitsArray.includes(arr)){
    fruitsArray.push(arr);
}

});
console.log(fruitsArray);
    


// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];

let arr5 = ["the", "way", "x", 4, 23];
if (arr5.includes(4)) {
  console.log(4);
} else {
  console.log("the search word was not found");
}

// Write a JS script to sort the following string
// let word = "lufituaeb"
let word = "lufituaeb";
console.log(word.split("").sort().join(""));
