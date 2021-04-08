#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { randomNunber } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = name();

console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const isCalc = () => {
  const operand = ['', '+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNunber(1, 10);
    const number2 = randomNunber(1, 10);
    const oper = randomNunber(0, 3);

    let answerCorrect;

    if (operand[oper] === '+') {
      answerCorrect = number1 + number2;
    } else if (operand[oper] === '-') {
      answerCorrect = number1 - number2;
    } else {
      answerCorrect = number1 * number2;
    }

    console.log(`Question: ${number1} ${operand[oper]} ${number2}`);

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

isCalc();
