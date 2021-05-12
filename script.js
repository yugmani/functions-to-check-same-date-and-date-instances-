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
// console.log(
//   withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// ); //Expected true
// console.log(
//   withinHour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
// ); //Expected  true
// console.log(
//   withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
// ); //Expected  false
// console.log(
//   withinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))
// ); //Expected  true

// **************************************
// 5. Return the number of days between two dates
//  **************************************

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

//My Code
function daysBetweenDates(a, b) {
  return Math.abs(a - b) / (1000 * 60 * 60 * 24);
}

//Author's Code
// function daysBetweenDates(a, b) {
//   const dif = Math.abs(a - b);
//   return dif / 1000 / 60 / 60 / 24;
// }

// Test Cases:
// console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'))); //Expected 10
// console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))); //Expected 7457

// **************************************
// 6. Add n days to an existing date
//  **************************************

// Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

//My Code
// function addDays({ date, daysToAdd }) {
//   let prevDays = date.getTime();
//   let daysAdd = daysToAdd * 24 * 60 * 60 * 1000;
//   return prevDays + daysAdd;
// }

//Author's Code
function addDays({ date, daysToAdd }) {
  const currentDays = date.getDate();
  return date.setDate(currentDays + daysToAdd);
}

// Test Cases:
// console.log(addDays({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 31 })); //Expected  952041600000
// console.log(addDays({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 10 })); //Expected  950227200000
// console.log(addDays({ date: new Date(Date.UTC(2000, 02, 28)), daysToAdd: 2 })); //Expected  954374400000

// **************************************
// 7. Calculate difference between two dates in hours, minutes, and seconds
//  **************************************

// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

//My Code
// function timeDirrenece(a, b) {
//   let diff = Math.abs(a - b);
//   let hrs = Math.floor(diff / 1000 / 60 / 60);
//   let min = Math.floor(diff / 1000 / 60 - hrs * 60);
//   let sec = Math.floor(diff / 1000 - hrs * 60 * 60 - min * 60);
//   let result = {};
//   result.hrs = hrs;
//   result.min = min;
//   result.sec = sec;
//   return result;
// }

//Author's Code
function timeDirrenece(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec };
}

// Test Cases:
// console.log(
//   timeDirrenece(
//     new Date('2000/01/01 08:00:00'),
//     new Date('2000/01/01 08:45:10')
//   )
// );
// // Expected { hrs: 0, min: 45, sec: 10 }
// console.log(
//   timeDirrenece(
//     new Date('2000/01/01 09:50:23'),
//     new Date('2000/01/01 08:00:00')
//   )
// );
// // Expected { hrs: 1, min: 50, sec: 23 }
// console.log(
//   timeDirrenece(
//     new Date('2000/01/01 11:04:12'),
//     new Date('2000/01/01 08:00:00')
//   )
// );
// Expected { hrs: 3, min: 4, sec: 12 }
