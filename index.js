#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'type ur sentence for word count'
    },
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentencd word count is ${words.length}`);
