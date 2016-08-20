'use strict'
const distribuicao = [
  ['1s2'],
  ['2s2', '2p6'],
  ['3s2', '3p6', '3d10'],
  ['4s2', '4p6', '4d10', '4f14'],
  ['5s2', '5p6', '5d10', '5f14'],
  ['6s2', '6p6', '6d10'],
  ['7s2', '7p6']
]

const run = require('./distribui')
run(distribuicao)