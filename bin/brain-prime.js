#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';
import { randomNunber, isPrime } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = name();

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrimeris = () => {
  let answerCorrect;

  for (let i = 0; i < 3; i += 1) {
    const number = randomNunber(1, 100);

    if (isPrime(number)) {
      answerCorrect = 'yes';
    } else {
      answerCorrect = 'no';
    }

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answerCorrect === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

isPrimeris();
