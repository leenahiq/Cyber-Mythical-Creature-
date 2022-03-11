const inquirer = require('inquirer');

const { questions } = require('./questions');

class Creature {
  _hunger;
  _thirst;
  _boredom;
  _isAlive = true;
  _status;

  constructor(name) {
    this._name = name;
    this._hunger = 10;
    this._thirst = 10;
    this._boredom = 10;
    this._status = 'Your pet is alive and well.';
  }

  get name() {
    return this._name;
  }
  get hunger() {
    return this._hunger;
  }
  get thirst() {
    return this._thirst;
  }
  get boredom() {
    return this._boredom;
  }
  get stats() {
    return console.table({
      name: this._name,
      hunger: this._hunger,
      thirst: this._thirst,
      boredom: this._boredom,
    });
  }
  get status() {
    return this._status;
  }

  set status(msg) {
    this._status = msg;
  }

  checkStats() {
    if (this._hunger <= 0) {
      this._isAlive = false;
      this.status = `${this.name} has died. Please, look after your pet.`;
    }
    if (this._hunger > 50) {
      this._isAlive = false;
      this.status = `${this.name} got too fat.`;
    }


    if (this._boredom <= 0) {
      this._isAlive = false;
      this.status = `${this.name} has run away to join the circus because they were bored, please play with your pet more next time...`;
    }
    if (this._boredom > 50) {
      this._isAlive = false;
      this.status = `${this.name} got too excited, be careful next time`;
    }


    if (this._thirst <= 0) {
      this._isAlive = false;
      this.status = `${this.name} has died of thirst`;
    }

    if (this._thirst > 50) {
      this._isAlive = false;
      this.status = `${this.name} drank too much and got sick`;
    }
  }

  drinks() {
    this.thirst(5);
    if (this.thirst < 0) this._thirst = 0;
    console.log(`Aaaaah, ${this.name} is feeling refreshed.`);
    return this.thirst;
  }

  async eats() {
    const { food } = await inquirer.prompt(questions.eat);

    if (food === 'meat') this.hunger(+2);
    if (food === 'berries') this.hunger(+3);
    if (food === 'wild boars') this.hunger(+5);

    return this._hunger;
  }

  hunger(num) {
    this._hunger += num;

    if (this._hunger < 0){ this._hunger = 0};
  if (this._hunger < 10){this.boredom(-1) };
    if (this._hunger > 20) {
      
      this.boredom(-2);
    }
    
    return this.checkStats();
  }

  thirst(num) {
    this._thirst += num;

    if (this._thirst < 0) this._thirst = 0;
    if (this._thirst < 10){this.hunger(-1)};
    if (this._thirst > 20) {
      this.hunger(-2);
    }
    
    
    return this.checkStats();
  }


  boredom(num) {
    this._boredom += num;
    if (this._boredom < 0) this._boredom = 0;
    if (this._boredom < 10) {this.thirst(-1)};
    if (this._boredom > 20) {
      this.thirst(-2);
    }
    

    return this.checkStats();
  }
}

module.exports = {
  Creature,
};

