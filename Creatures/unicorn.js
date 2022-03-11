const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Creature } = require('../mythicalCreatures');

class unicorn extends Creature {
  constructor(name) {
    super(name);
  }
  async play() {
    const { play } = await inquirer.prompt(questions.unicornPlay);

    if (play === 'sprinkle') this.boredom(+2);
    if (play === 'clouds') this.boredom(+3);
    if (play === 'hideandseek') this.boredom(+5);
  }
}

module.exports = {
  unicorn,
};
