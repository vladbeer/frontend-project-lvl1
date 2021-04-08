#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { randomNunber } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = name();

console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const isProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const index = randomNunber(0, 5);
    const pass = randomNunber(0, 9);
    let firstNumber = randomNunber(1, 50);
    const arr = [];

    for (let j = 0; j < 10; j += 1) {
      arr.push(firstNumber);
      firstNumber += index;
    }

    const answerCorrect = arr[pass];
    arr[pass] = '..';

    console.log(`Question: ${arr.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (answerCorrect === +answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

isProgression();
