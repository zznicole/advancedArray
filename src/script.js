

// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
// an amount needed and a property saying whether it is bought or not. Write a few functions for working 
// with this array: 
// 1) Function for displaying the entire list; 
// 3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.

let groceries = [];

function Grocery(product, quantity, isBought) {
  this.product = product;
  this.quantity = quantity;
  this.isBought = isBought;
};

let item1 = new Grocery('Toothbrush', '3', true);
let item2 = new Grocery('Handwash', '1', true);
let item3 = new Grocery('Cottonbud', '2', true);
let item4 = new Grocery('Pasta', '5', false);
let item5 = new Grocery('Waterbottle', '8', false);
let item6 = new Grocery('Pasta', '10', false);
let item7 = new Grocery('Tomato sause', '2', true);
let item8 = new Grocery('Olives', '1', false);
let item9 = new Grocery('Bread', '3', false);
let item10 = new Grocery('Banana', '6', false);
let item11 = new Grocery('Mandarin', '9', false);

groceries.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11);

function displayGroceries() {
  for (let i = 0; i < groceries.length; i++) {
   document.write(`<p>${groceries[i].product}  ${groceries[i].quantity}</p>`);
  }
}

displayGroceries();

// // 2) Function for adding a purchase to the list. Note that if a product already exists in the array, 
// // the amount needs to be increased in the existing purchase, not in a new one; 
// function addItem(item) {
//   item = new Grocery(product, quantity, isBought);
//   for (let i = 0; i < groceries.length; i++) {
    
//     if (groceries[i].product == item.product) {
//       groceries[i].quantity += item.quantity;
//     } else {
//         groceries.push(item);
//     }
//   }
// }
// addItem(new Grocery('Toothbrush', '3', true));
  
 

// // 3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.



// // 2. Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and 
// // the faculty it is meant for. Write a few functions for working with it: 
// // 1) Display all the classrooms; 
// // 2) Display all the classrooms for a given faculty; 
// // 3) Display only the classrooms that would fit a given group. A group object contains a name, 
// // the number of students, and the faculty name.

// // Write a simple function that joins all elements of an array and returns a string. 
// // For example, join(["red", "green", "blue"], "+") will return "red+green+blue". Do not use join() function.
// // let colours = ["red", "green", "blue"]; 
// // function joinElements(colours, symbol) {
// //   let result = '';
// //   for(let i = 0; i < colours.length; i++) {
// //    result = colours[0] + symbol + colours[1] + symbol + colours[2];
// //    return result;
// //   }

// // }
// // console.log(joinElements(colours,' + ')); 



// let country = ['Sweden','Danmark','Norway','Germany']

// function myFunction() {
//   country.splice(1,0,'France','Spain');
//   return country;

// }
// document.write(`<p> I have been to ${country}.</p>`);