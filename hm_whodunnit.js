// EPISODE 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// "The murderer is Miss Scarlet." will be the output. declareMurderer takes a funcion that just returns the scenario.murderer with the rest of a string. The result of that function is passed to another varible and then is logged on the console. The last step could be easily skipped by just doing the following: console.log(declareMurderer())

// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// There was an error message on "murderer = 'Mrs. Peacock';". No output expected. A constant variable cannot be reassigned another value.

//EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// "First Verdict:  The murderer is Mrs. Peacock."
// "Second Verdict:  The murderer is Professor Plum."
// "murderer" is first defined as a global variable and then and reassigned its value const variable "declareMurderer". So the "firstVeredict" is getting this reassigned value stored in "declareMurderer" and the "secondVeredict" is getting the value of the global variable.

//EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
// "Suspect three is Mrs. Peacock."
// Again like in EPISODE 3, "suspectThree" as a global will be 'Mrs. Peacock', but locally its value was reassigned to 'Colonel Mustard'. So when "declareAllSuspects" is called, "suspectThree" will have a different value than the one from the global variable.

// EPISODE 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// "The weapon is the Revolver."
// The value of the keys in a constant object can be changed.

// EPISODE 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// "The murderer is Mrs. White."
// "murderer" is defined as a let. As "changeMurderer()" is called before logging the veredict in the console, it changed from 'Colonel Mustard' to 'Mr. Green', and the again to 'Mrs. White' as its value is reassigned by calling another function.

// EPISODE 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// "The murderer is Mr. Green."
// It does not work as EPISODE 6 because there is a "let murderer" in the function "plotTwist". That "let" indicates that the variable "murderer" will be only used as a local variable for the function "plotTwist" and it will changed then to 'Miss Scarlet' only locally.

// EPISODE 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };

//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }

//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }

//       unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
//   }

//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }

//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

// "The weapon is Candle Stick."
// It is known that the value of a key can be changed even when the object is defined as a constant. Because the value of room is reassined to 'Dining Room', when the function "plotTwist('Dining Room')" is called, "murderer" changes to 'Colonel Mustard'. The same, when " unexpectedOutcome('Colonel Mustard')" is called, it will change the weapon to 'Candle Stick'.

// EPISODE 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// "The murderer is Professor Plum."
// "murderer" does not change as the let inside the if statement indicates that 'Mrs. Peacock' will only be used in that block of code.