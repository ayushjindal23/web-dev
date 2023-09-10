'use strict';

// //reading the content of the element
// console.log(document.querySelector('.message').textContent); //Start guessing...

// //changing the text of the content
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);//Correct Number!

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
         document.querySelector('.message').textContent = '⛔️ No number!';
        //displayMessage('⛔️ No number!');
    
    }
});
