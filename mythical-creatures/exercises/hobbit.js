class Hobbit {
  constructor(newHobbit) {
    this.name = newHobbit.name
    this.age = 0
    this.adult = false
    this.old = false
    this.hasRing = false
  }

  celebrateBirthday() {
    this.age++

    if (this.age >= 33) {
      this.adult = true
    }

    if (this.age > 100) {
      this.old = true
    }
  }

  getRing() {
    var response = ""
    if (this.name === 'Frodo') {
      response = "Here is the ring!"
      this.hasRing = true
    } else {
      response = "You can't have it!"
    }
    return response
  }
}

module.exports = Hobbit
