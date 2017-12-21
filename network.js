
const log = require("node-simple-logger")
const Layer = require("./layer")
const Connection = require("./connection")

const ACTIVATION_WEIGHT = 1

class Network {
  constructor(options, layers) {
    this.index = options.index || 0
    this.layers = Array(layers.length)

    for(let i = layers.length-1; i >= 0; i--) {
      this.layers[i] = new Layer({
        index: i, 
        length: layers[i], 
        nextLayer: this.layers[i+1]
      })
    }

    this.inputLayer = this.layers[0]
    this.inputConnections = this.inputLayer.getNodes().map(node => new Connection(null, node))

    options.print && this.print()
  }

  activate(nodes) {
    try {
      this.inputConnections.forEach(con => con.activate(ACTIVATION_WEIGHT))
    } catch(err) {
      return console.log("Failed to activate network: ", err)
    }

    const outputLayer = this.layers[this.layers.length-1]
    console.log("Output: " + outputLayer.toString())
  }

  identify() {
    console.log("Network " + this.index)
  }

  print() {
    this.identify()
    this.layers.forEach(layer => layer.print())
  }
}

module.exports = Network