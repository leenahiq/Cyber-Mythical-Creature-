const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Creature } = require('../mythicalCreatures');

class griffin extends Creature {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.griffinPlay);

    if (play === 'fetch') this.boredom(+3);
    if (play === 'neighbourhood') this.boredom(+3);
    if (play === 'zoom') this.boredom(+5);
  }
}

module.exports = {
  griffin,
};
