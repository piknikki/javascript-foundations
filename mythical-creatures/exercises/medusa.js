var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(newMedusa) {
    this.name = newMedusa;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);

    if (this.statues.length < 3) {
      this.statues.push(statue);
    } else if (this.statues.length == 3) {
      var notAStatue = this.statues.shift();
      var person = new Person(notAStatue.name, "relieved");

      this.statues.push(statue);
      return person
    }
  }
}

module.exports = Medusa;
