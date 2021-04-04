#!/usr/bin/env node

import { name } from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = name();

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = () => {
    
    const numbers = [[15, 'no'], [6, 'yes'], [7, 'no']];

    for (let i = 0; i < numbers.length; i++) {
        
        console.log(`Question: ${numbers[i][0]}`);

        const answer = readlineSync.question('Your answer: ');

        //console.log(`Your answer: ${answer}`);

        if ((numbers[i][0] % 2 === 0 && answer === 'yes') || (numbers[i][0] !== 0 && answer === 'no')) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${numbers[i][1]}.\nLet's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

isEven();