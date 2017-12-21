
const Node = require("./node")

class Layer {
  constructor({ index, length, nextLayer }) {
    this.index = index
    this.nextLayer = nextLayer
    this.nodes = Array(length)

    for(let i = 0; i < length; i++)
      this.nodes[i] = new Node(i, nextLayer)
  }

  getNodes() {
    return this.nodes
  }

  identify() {
    console.log("Layer " + this.index)
  }

  print() {
    this.identify()
    this.nodes.forEach(node => node.print())
  }

  toString() {
    return "[" + this.nodes.map(node => node.toString()).join(", ") + "]"
  }
}

module.exports = Layer