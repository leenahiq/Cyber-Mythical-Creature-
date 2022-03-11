const inquirer = require('inquirer');

const { questions } = require('./questions');

const { dragon } = require('./Creatures/dragon');
const { griffin } = require('./Creatures/griffin');
const { unicorn } = require('./Creatures/unicorn');
const { mermaid } = require('./Creatures/mermaid');

let myCreature;

async function start() {
  const { typeOfCreature } = await inquirer.prompt(questions.typeOfCreature);

  const { creatureName } = await inquirer.prompt({
    type: 'input',
    name: 'creatureName',
    message: 'Name your Mythical Creature',
  });

  if (typeOfCreature === 'dragon') myCreature = new dragon(creatureName);
  else if (typeOfCreature === 'griffin') myCreature = new griffin(creatureName);
  else if (typeOfCreature === 'unicorn') myCreature = new unicorn(creatureName);
  else if (typeOfCreature === 'mermaid') myCreature = new mermaid(creatureName);

  userChoice();
}

async function userChoice() {
  myCreature.boredom(10);
  myCreature.hunger(10);
  myCreature.thirst(10);
  myCreature.stats;

  if (!myCreature._isAlive) {
    gameOver();
    return;
  }

  const { choice } = await inquirer.prompt(questions.choice);

  if (choice === 'status') console.log(myCreature.status);
  if (choice === 'play') await myCreature.play();
  if (choice === 'feed') await myCreature.eats();
  if (choice === 'drink') await myCreature.drinks();
  if (choice === 'quit') {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myCreature.checkStats();

  userChoice();
}

async function confirmQuit() {
  const { quitChoice } = await inquirer.prompt(questions.quitChoice);

  if (quitChoice === 'yes') return true;
  else return false;
}

async function gameOver() {
  console.log(myCreature.status);
  const { playAgain } = await inquirer.prompt(questions.playAgain);

  if (playAgain === 'yes') start();
  else return;
}

start();
