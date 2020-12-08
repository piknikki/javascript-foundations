class Dragon {
  constructor(name, rider, hungry = true) {
    this.name = name
    this.rider = rider
    this.hungry = hungry
    this.eating = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.eating++
    if (this.eating === 3) {
      this.hungry = false
      this.eating = 0
    }
  }
}

module.exports = Dragon
