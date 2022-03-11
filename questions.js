const questions = {
  eat: {
    type: 'list',
    name: 'food',
    message: `What do you want to feed ${this.name}?`,
    choices: [
      {
        key: 'a',
        name: 'meat',
        value: 'meat',
      },
      {
        key: 'b',
        name: 'berries',
        value: 'berries',
      },
      {
        key: 'c',
        name: 'wild boar',
        value: 'wild boar',
      },
    ],
  },

  unicornPlay: {
    type: 'list',
    name: 'play',
    message: 'Do you want to play with?',
    choices: [
      {
        key: 'a',
        name: 'sprinkle magic glitter dust',
        value: 'sprinkle',
      },
      {
        key: 'b',
        name: 'leap through clouds',
        value: 'clouds',
      },
      {
        key: 'c',
        name: 'Play hide and seek',
        value: 'hideandseek',
      },
    ],
  },

  dragonPlay: {
    type: 'list',
    name: 'play',
    message: 'Do you want to play with?',
    choices: [
      {
        key: 'a',
        name: 'train dragon fly',
        value: 'fly',
      },
      {
        key: 'b',
        name: 'teach to hunt',
        value: 'hunt',
      },
      {
        key: 'c',
        name: 'take him to mountain',
        value: 'mountain',
      },
    ],
  },

  griffinPlay: {
    type: 'list',
    name: 'play',
    message: 'Do you want to play with?',
    choices: [
      {
        key: 'a',
        name: 'play fetch',
        value: 'fetch',
      },
      {
        key: 'b',
        name: 'fly around the neighbourhood',
        value: 'neighbourhood',
      },
      {
        key: 'c',
        name: 'Zoomies',
        value: 'Zoom',
      },
    ],
  },

  mermaidPlay: {
    type: 'list',
    name: 'play',
    message: 'Do you want to play with?',
    choices: [
      {
        key: 'a',
        name: 'water show',
        value: 'water',
      },
      {
        key: 'b',
        name: 'find magic shells at the bottom of the ocean',
        value: 'shells',
      },
      {
        key: 'c',
        name: 'make a pearl necklace',
        value: 'necklace',
      },
    ],
  },

  typeOfCreature: {
    type: 'list',
    name: 'typeOfCreature',
    message:
      'What type of Mythical Creature would you like? Please choose from the following options:',
    choices: [
      {
        key: 'a',
        name: 'unicorn',
        value: 'unicorn',
      },
      {
        key: 'b',
        name: 'Dragon',
        value: 'dragon',
      },
      {
        key: 'c',
        name: 'griffin',
        value: 'griffin',
      },
      {
        key: 'd',
        name: 'mermaid',
        value: 'marmaid',
      },
    ],
  },

  choice: {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      {
        key: 'a',
        name: 'Play with your friend',
        value: 'play',
      },
      {
        key: 'b',
        name: 'Feed your friend',
        value: 'feed',
      },
      {
        key: 'c',
        name: 'Give your friend a drink',
        value: 'drink',
      },
      {
        key: 'd',
        name: "View your friends status",
        value: 'status',
      },
      {
        key: 'e',
        name: 'Quit the game',
        value: 'quit',
      },
    ],
  },

  quitChoice: {
    type: 'list',
    name: 'quitChoice',
    message:
      'if you quit now! your creature will get angry and turn against you...',
    choices: [
      {
        key: 'a',
        name: "Yes, I'm sure.",
        value: 'yes',
      },
      {
        key: 'b',
        name: "No, I'll play some more.",
        value: 'no',
      },
    ],
  },

  playAgain: {
    type: 'list',
    name: 'playAgain',
    message: 'Would you like to play again?',
    choices: [
      {
        key: 'a',
        name: 'Yes',
        value: 'yes',
      },
      {
        key: 'b',
        name: 'No',
        value: 'no',
      },
    ],
  },
};

module.exports = {
  questions,
};
