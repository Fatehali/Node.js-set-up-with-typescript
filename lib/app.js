import inquirer from 'inquirer';
import chalk from 'chalk';
let answers = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age",
});
console.log(chalk.blue(`You are ${answers.age} years old.`));
