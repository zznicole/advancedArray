
// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
// an amount needed and a property saying whether it is bought or not. Write a few functions for working 
// with this array: 
// 1) Function for displaying the entire list; 
// 2) Function for adding a purchase to the list. Note that if a product already exists in the array, 
// the amount needs to be increased in the existing purchase, not in a new one; 
// 3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.

let groceries = [];

function Grocery(product, quantity, isBought) {
  this.product = product;
  this.quantity = quantity;
  this.isBought = isBought;
};

let item1 = new Grocery('handwash', '2', true);
let item2 = new Grocery('handwash', '2', true);
let item3 = new Grocery('handwash', '2', true);
let item4 = new Grocery('pasta', '5', false);
let item5 = new Grocery('waterbottle', '8', false);
let item6 = new Grocery('pasta', '10', false);
let item7 = new Grocery('tomato sause', '2', true);
let item8 = new Grocery('olives', '1', false);
let item9 = new Grocery('bread', '3', false);
let item10 = new Grocery('banana', '6', false);

groceries.push(item1, item2,item3, item4, item5, item6, item7, item8, item9, item10);

console(groceries);



// 2. Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and 
// the faculty it is meant for. Write a few functions for working with it: 
// 1) Display all the classrooms; 
// 2) Display all the classrooms for a given faculty; 
// 3) Display only the classrooms that would fit a given group. A group object contains a name, 
// the number of students, and the faculty name.