#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { promises } from "dns";
import sum from "./add.js";
import sub from "./sub.js";
import multiply from "./multiply.js";
import div from "./div.js";




const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcome() {
  let title = chalkAnimation.rainbow("Let's start calculator");
  await sleep();
  title.stop();
  console.log(chalk.greenBright(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
}
await welcome();
async function division() {
  let answers = await inquirer
.prompt([
{
  type: "list",
  name: "operator",
  message: chalk.cyanBright("which operation do you want to perform"),
  choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
{
  type: "number",
  name: "num1",
  message: chalk.blueBright("Enter First number"),
},
{
  type: "number",
  name: "num2",
  message: chalk.blueBright("Enter 2nd number"),
},
])
.then((answers) => {
  if (answers.operator == "Addition") {
    sum(answers.num1,answers.num2);
  }
  if (answers.operator == "Subtraction") {
   sub(answers.num1,answers.num2);
  }
  if (answers.operator == "Multiplication") {
    multiply(answers.num1,answers.num2);
  }
  if (answers.operator == "Division") {
    div(answers.num1,answers.num2);
  }
})}
async function startagain() {
  do {
    await division();

    var again = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "do you want to restart?.(y/n)",
      },
    ]);
  } while (again.restart == "y");
}
startagain();


