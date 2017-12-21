
const log = require("node-simple-logger")
const Connection = require("./connection")

class Node {
  constructor(nodeIndex, nextLayer, options) {
    this.nodeIndex = nodeIndex
    this.nextLayer = nextLayer

    this.connections = this.nextLayer && this.createConnections()
  }

  createConnections() {
    return this.nextLayer.getNodes().map(node => new Connection(this, node))
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
}

module.exports = Node