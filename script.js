// **************************************
// 1. Check if two dates fall on the exact same day
//  **************************************

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function areSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// Test Cases:
// console.log(areSameDate(new Date('2000/01/01'), new Date('2000/01/01'))); //Expected  true
// console.log(areSameDate(new Date('2000/01/01'), new Date('2000/01/02'))); //  Expected  false
// console.log(areSameDate(new Date('2001/01/01'), new Date('2000/01/01'))); //Expected  false
// console.log(areSameDate(new Date('2000/11/01'), new Date('2000/01/01'))); //Expected  false

// **************************************
// 2. Check if two dates are equal
//  **************************************

// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

function dateInstances(date1, date2) {
  return date1.getTime() === date2.getTime();
}

// Test Cases:
// console.log(
//   dateInstances(
//     new Date('2000/01/01 08:00:00'),
//     new Date('2000/01/01 08:45:00')
//   )
// ); //Expected false
// console.log(
//   dateInstances(
//     new Date('2000/01/01 08:00:00'),
//     new Date('2000/01/01 08:00:00')
//   )
// ); //Expected  true
// console.log(
//   dateInstances(
//     new Date('2001/01/01 08:00:00'),
//     new Date('2000/01/01 08:00:00')
//   )
// ); //Expected  false

// **************************************
// 3. Check if one date is earlier than another
//  **************************************

// Write a function that takes as argument an object with the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise

//My Code
function isEarlier(obj) {
  return obj.a.getTime() < obj.b.getTime();
}

//Author's Code
// function isEarlier( { a, b } ) {
//    return a < b
// }

// Test Cases:
// console.log(
//   isEarlier({
//     a: new Date('2000/01/01 08:00:00'),
//     b: new Date('2000/01/01 08:45:00')
//   })
// ); //Expected  true
// console.log(
//   isEarlier({
//     a: new Date('2000/01/01 08:45:00'),
//     b: new Date('2000/01/01 08:00:00')
//   })
// ); //Expected  false
// console.log(
//   isEarlier({
//     a: new Date('2000/01/01 08:00:00'),
//     b: new Date('2000/01/01 08:00:00')
//   })
// ); //Expected  false

// **************************************
// 4. Check if two dates are within 1 hour from each other
//  **************************************

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

//My Code
function withinHour(a, b) {
  if (a.getTime() < b.getTime()) {
    return b.getTime() - a.getTime() <= 3600000;
  } else {
    return a.getTime() - b.getTime() <= 3600000;
  }
}

//Author's Code
// function withinHour( a, b ) {
//    return Math.abs( a - b) / 1000 / 60 <= 60
// }

// Test Cases:
console.log(
  withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
); //Expected true
console.log(
  withinHour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
); //Expected  true
console.log(
  withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
); //Expected  false
console.log(
  withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))
); //Expected  true

// **************************************
// 2. Check if two dates are equal
//  **************************************

// **************************************
// 2. Check if two dates are equal
//  **************************************
