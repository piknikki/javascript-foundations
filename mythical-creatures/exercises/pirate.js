class Pirate {
  constructor(name, job = "scallywag", cursed = false, booty = 0) {
    this.name = name
    this.job = job
    this.cursed = cursed
    this.booty = booty
    this.shipsRobbed = 0
  }

  robShip() {
    var response = ""
    this.shipsRobbed++;

    if (this.booty === 500) {
      this.cursed = true
      response = "ARG! I\'ve been cursed!"
    } else {
      this.booty += 100;
      response = "YAARRR!";
    }

    return response
  }

  liftCurse() {
    var response = "";

    if (this.cursed) {
      this.booty = 200;
      this.cursed = false;
      response =  "Your curse has been lifted!"
    } else {
      response = "You don't need to lift a curse!"
    }
    return response;
  }
}

module.exports = Pirate;
