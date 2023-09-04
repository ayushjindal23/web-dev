'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function logger() {
//     console.log(`ayush jindal`);
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apple, orange) {

//     console.log(`I like both ${apple} and ${orange}`);
//     console.log(typeof apple);
// }

// let a = fruitProcessor(1, `2`);







// // Function declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);








// //arrays
// const friends = ['ayush', 'rohit', 'garg'];
// console.log(friends);

// //another way of initializing array
// const years = new Array(1, 2, 3, '4');
// console.log(typeof years);
// console.log(years[3]);







// //array methods
// friends.push('aisia');  //to the end
// console.log(friends);

// friends.unshift('jay'); //to the front
// console.log(friends);

// //remove elements
// friends.pop(); //last elem
// console.log(friends);

// friends.shift(); //first elem  
// console.log(friends)

// console.log(friends.indexOf('rohit'));

// //includes method - returns true/false and uses strict comparison

// console.log(friends.includes('garg'));
// friends.push('23');
// console.log(friends.includes(23));







// //OBJECTS
// const ayush = {

//     firstname: 'AYUSH',
//     lastname: 'JINDAL',
//     age: 2023 - 2000,
//     friendname: ['Michael', 'bj', 'cj']

// };

// console.log(ayush);

// console.log(ayush.firstname);
// console.log(ayush['firstname']);

// const nameKey = 'name';

// console.log(ayush['first' + nameKey]);
// console.log(ayush['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about ayush? Choose between firstName, lastName, age, job, and friends');
// console.log(ayush[interestedIn]);

// console.log(`${ayush.firstname} has ${ayush.friendname.length} friends, and his best friend is called ${ayush.friendname[0]}`);







// //Object Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calAge1: function (birthYeah) {
//         return 2037 - birthYeah;
//     },
    

//     calAge2: function () {
//         console.log(this);
//         return 2037 - this.birthYeah;
//     },

//     calAge3: function () {
//         //creating a new property 'age'
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     }

// };

// console.log(jonas.calAge1(1991));
// console.log(jonas['calAge1'](1991));

// console.log(jonas.calAge2());


// console.log(jonas.calAge3());







// //FOR LOOP

// for(let rep =0;rep<=10; rep++){

//     console.log(`Lifting weights ${rep}`);

// }












