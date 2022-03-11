const inquirer = require('inquirer');

const { questions } = require('../questions');
const { Creature } = require('../mythicalCreatures');

class mermaid extends Creature {
  constructor(name) {
    super(name);
  }
  async play() {
    const { play } = await inquirer.prompt(questions.mermaidPlay);

    if (play === 'water') this.boredom(+2);
    if (play === 'shells') this.boredom(+5);
    if (play === 'necklace') this.boredom(+5);
  }
}

module.exports = {
  mermaid,
};
