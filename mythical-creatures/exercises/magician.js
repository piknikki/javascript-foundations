class Magician {
  constructor(person) {
    console.log(person)
    this.name = 'The Great ' + person.name;
    this.assistant = person.assistant;
    this.favoriteAccessory =  person.clothing || 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(phrase) {
    return phrase.toUpperCase() + '!';
  }

  performTrick() {
    this.confidencePercentage += 10;
    var response = ''
    if (this.favoriteAccessory === 'top hat') {
      response = ('pull rabbit from top hat').toUpperCase();
    } else {
      response = ('pull dove from sleeve').toUpperCase();
    }
    return response;
  }

  performShowStopper() {
    var response = '';
    if (this.confidencePercentage < 100 || this.assistant === false) {
      response = 'Oh no, this trick is not ready!';
    } else  if (this.confidencePercentage >= 100 && this.assistant === true) {
      response = 'WOW! The magician totally just sawed that person in half!';
    }
    return response;
  }
}

module.exports = Magician;
