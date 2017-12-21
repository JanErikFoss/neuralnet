
const INITIAL_WEIGHT = 0.5

class Connection {
  constructor(n1, n2, weight = INITIAL_WEIGHT) {
    this.n1 = n1
    this.n2 = n2
    this.weight = weight
  }

  getWeight() {
    return this.weight
  }

  identify() {
    console.log("")
  }

  print() {
    console.log("Connection with weight " + this.weight)
  }
}

module.exports = Connection