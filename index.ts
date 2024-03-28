#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 );


const answers = await inquirer.prompt([
    {
       name: "usserGuessedNumber",
       type: "number",
       message: "Please guess a number"
   }
]);

   if(answers.usserGuessedNumber === randomNumber){
      console.log("congratulations! you guessed right number.");
  }else{
     console.log("Sorry! you guessed wrong number.");
}