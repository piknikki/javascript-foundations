class Vampire {
  constructor(name, pet = 'bat', thirsty = true, ouncesDrank = 0) {
    this.name = name
    this.pet = pet
    this.thirsty = thirsty
    this.ouncesDrank = ouncesDrank
  }

  drink() {
    if (this.ouncesDrank === 50) {
      return "I'm too full to drink anymore!"
    } else {
      this.ouncesDrank += 10
      this.thirsty = false
    }
  }
}

module.exports = Vampire
