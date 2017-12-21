
const Connection = require("./connection")

const INITIAL_WEIGHT = 0.5

class Node {
  constructor(nodeIndex, nextLayer, weight = INITIAL_WEIGHT, options) {
    this.nodeIndex = nodeIndex
    this.weight = weight

    this.connections = nextLayer 
      ? nextLayer.getNodes().map(node => new Connection(this, node))
      : []
  }

  getConnections() {
    return this.getConnections()
  }

  ping(delta) {
    this.weight += delta
    this.connections.forEach(con => con.activate())
  }

  getWeight() {
    return this.weight
  }

  identify() {
    console.log("Node " + this.nodeIndex)
  }

  print() {
    this.identify()
    this.connections
      ? this.connections.forEach(con => con.print())
      : console.log("Output node")
  }

  toString() {
    return this.weight
  }
}

module.exports = Node