
const log = require("node-simple-logger")
const Layer = require("./layer")

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

    options.print && this.print()
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