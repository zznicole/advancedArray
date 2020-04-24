

// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
// an amount needed and a property saying whether it is bought or not. Write a few functions for working 
// with this array: 
// 1) Function for displaying the entire list; 

let groceries = [];


function Grocery(product, quantity, isBought) {
  this.product = product;
  this.quantity = quantity;
  this.isBought = isBought;
}

let item1 = new Grocery('Toothbrush', 3, false);
let item2 = new Grocery('Handwash', 5, true);
let item3 = new Grocery('Cottonbud', 2, true);
let item4 = new Grocery('honey', 1, false);
let item5 = new Grocery('Waterbottle', 8, false);
let item6 = new Grocery('Pasta', 10, false);
let item7 = new Grocery('Tomato sause', 2, true);
let item8 = new Grocery('Olives', 1, false);
let item9 = new Grocery('Bread', 3, false);
let item10 = new Grocery('Banana', 6, false);
let item11 = new Grocery('Mandarin', 9, false);
 
groceries.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11);

function displayGroceries() {
  for (let i = 0; i < groceries.length; i++) {
   document.write(`<p>${groceries[i].product}  ${groceries[i].quantity}</p>`);
  }
}

displayGroceries();
console.log(groceries);

//  2) Function for adding a purchase to the list. Note that if a product already exists in the array, 
// the amount needs to be increased in the existing purchase, not in a new one; 
function addItem (item) {
//  let item = new Grocery(product, quantity, isBought) ;
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i].product == item.product) {
      groceries[i].quantity += item.quantity;
      return;
    }
  }
  groceries.push(item);
      
  // document.write(`<p>${item.product} ${item.quantity}</p>`);
}
addItem(new Grocery('Orange', 3, false));
addItem(new Grocery('Banana', 3, false));

 
displayGroceries();

// 3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.

function purchasedItem(item) {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i].product == item) {
      groceries[i].isBought = true;
      document.write(`<p>${groceries[i].product} purchased</p>`);
    }
  }
}  
purchasedItem('Toothbrush');
displayGroceries();


// 2. Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and 
// the faculty it is meant for. Write a few functions for working with it: 
// 1) Display all the classrooms; 

let classrooms = [];

function Classroom (className, numOfSeats, faculty) {
  this.className = className;
  this.numOfSeats = numOfSeats;
  this.faculty = faculty;
}

let classroom1 = new Classroom('A101', 20, 'Engineering');
let classroom2 = new Classroom('B201', 13, 'Fine Arts');
let classroom3 = new Classroom('C301', 16, 'Social Sciences');
let classroom4 = new Classroom('D101', 20, 'Economics and Management');
let classroom5 = new Classroom('B501', 11, 'Fine Arts');
let classroom6 = new Classroom('e201', 20, 'Law');
let classroom7 = new Classroom('C101', 18, 'Social Sciences');
let classroom8 = new Classroom('D301', 15, 'Fine Arts');
let classroom9 = new Classroom('A201', 20, 'Engineering');
 
classrooms.push (classroom1, classroom2, classroom3, classroom4, classroom5, classroom6, classroom7, classroom8, classroom9);

function displayClassroom() {
  for (let classroom of classrooms) {
    document.write(`<p>Classroom ${classroom.className}, ${classroom.numOfSeats} seat, ${classroom.faculty}</p>`);
  }
}

displayClassroom();
console.log(classrooms);

// 2) Display all the classrooms for a given faculty; 
// function displayFaculty() {
//   for(let classroom of classrooms) {
//     document.write(`<article>${classroom.faculty}</article>`);
//   }
//   return;
// }
// displayFaculty();

function facultyClassroom(classroom) {
  
return classroom.faculty == "Engineering";
}

console.log(classrooms.filter(facultyClassroom));


// 3) Display only the classrooms that would fit a given group. A group object contains a name, 
// the number of students, and the faculty name.
let group = {
  groupName: 'First Year',
  numOfStudent: 13,
  faculty: 'Fine Arts'
}

function findRoom(classroom) {
  return classroom.numOfSeats >= this.numOfStudent && classroom.faculty == this.faculty;
}

let roomsFitGroup = classrooms.filter(findRoom, group); 
for(let classroom of roomsFitGroup) {
  
document.write(`<h3>${group.groupName} group can book classroom ${classroom.className}.</h3>`);
}




