const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Creature } = require('../mythicalCreatures');

class dragon extends Creature {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.dragonPlay);

    if (play === 'fly') this.boredom(+2);
    if (play === 'hunt') this.boredom(+3);
    if (play === 'mountain') this.boredom(+5);
  }
}

module.exports = {
  dragon,
};
