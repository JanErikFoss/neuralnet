
const Network = require("./network")

const network = new Network({ print: false }, [5, 7, 3])

network.activate([0, 1])