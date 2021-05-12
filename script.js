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
console.log(
  dateInstances(
    new Date('2000/01/01 08:00:00'),
    new Date('2000/01/01 08:45:00')
  )
); //Expected false
console.log(
  dateInstances(
    new Date('2000/01/01 08:00:00'),
    new Date('2000/01/01 08:00:00')
  )
); //Expected  true
console.log(
  dateInstances(
    new Date('2001/01/01 08:00:00'),
    new Date('2000/01/01 08:00:00')
  )
); //Expected  false
