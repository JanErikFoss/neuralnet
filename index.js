
const log = require("node-simple-logger")
const Network = require("./network")

const network = new Network({ print: true }, 2, 3, 3, 100000, 3, 2)