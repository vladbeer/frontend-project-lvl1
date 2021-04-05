#!/usr/bin/env node

import {name} from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = name();

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = () => {
    
    let answerCorrect;

    for (let i = 0; i < 3; i++) {

        const number = Math.floor(Math.random() * 100) + 1;

        if (number % 2 === 0) {
            answerCorrect = 'yes';
        } else {
            answerCorrect = 'no';
        }
        
        console.log(`Question: ${number}`);

        const answer = readlineSync.question('Your answer: ');

        if (answerCorrect === answer) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${answerCorrect}.\nLet's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

isEven();