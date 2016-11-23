const step = (x, y) => (!y) 
  ? [ Math.ceil((x+1) / 2), Math.floor((x+1) / 2) ] 
  : [ x+1, Math.max(y-1, 0) ]

const mount = ([head, ...tail], last) => equalCoord(head, last) 
  ? [ head, ...tail ] 
  : [ ...mount([step(...head)], last), head, ...tail ]

const equalCoord = ([x, y], [x2, y2]) => x === x2 && y === y2

const initCoord = [0, 0]
  
const getCoord = (arr, [x, y]) => arr[x][y]

const getLastCoord = (input) => [input.length-1, input.slice(-1)[0].length-1]

const orderedCoords = (input) => mount([initCoord], getLastCoord(input)).reverse()

const coordsToValues = (coords, input) => coords.map(getCoord.bind(null, input))

const distribution = (input) => coordsToValues(orderedCoords(input), input)

module.exports = distribution
