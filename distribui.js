
let positions = {
  linha: 0,
  coluna: 0
}
module.exports = (distribuicao) => {
  
  const pulaLinha = (linha, coluna) => [linha+1, coluna]
  const pulaLinhaColuna = (linha, coluna) => [linha+1, coluna+1]
  const pulaLinhaDiminuiColuna = (linha, coluna) => [linha+1, coluna-1]
  const pulaLinhaIniciaColuna = (linha, coluna) => [linha+1, 0]
  const continuaLinhaAndaColuna = (linha, coluna) => [linha, coluna+1]
  const voltaLinhaContinuaColuna = (linha, coluna) => [linha-1, coluna]
  const voltaLinhaVoltaColuna = (linha, coluna) => [linha-1, coluna-1]
  const volta2LinhasUltimaColuna = (linha, coluna) => [linha-2, coluna]
  const testaFinalDist = (linha, coluna) => {
    const ultimaLinha = (linha === distribuicao.length-1)
    const ultimaColuna = (coluna === distribuicao[linha].length-1)
    return (ultimaLinha && ultimaColuna)
  }
  const getNextElement = (parOrdenado) => {
    let linha = parOrdenado[0]
    let coluna = parOrdenado[1]

    if(!Array.isArray(parOrdenado)) return false
    if(testaFinalDist(linha, coluna)) return false
    if(linha===0) {
      if(coluna===0) return pulaLinha(positions.linha, positions.coluna)
      else return pulaLinhaColuna(positions.linha, positions.coluna)
    }
    if(linha===1 || linha===2) {
      if(coluna===0) {
        positions.linha = linha
        positions.coluna = coluna+1
        return continuaLinhaAndaColuna(linha, coluna)
      }
      if(coluna===1 ) {
        return pulaLinhaIniciaColuna(positions.linha, positions.coluna)
      }
      // Se coluna é a ultima posição da linha
      if(coluna===distribuicao[linha].length-1) {
        return pulaLinhaDiminuiColuna(positions.linha, positions.coluna)
      }
    }
    if(linha > 2 && linha < 5){
      let tam = distribuicao[linha-1].length-1
      if(coluna===0 && tam < 3) {
        positions.linha = linha-1
        positions.coluna = tam 
        return [positions.linha, positions.coluna]
      }
      if(coluna===0 && tam >= 3) {
        positions.linha = linha-1
        positions.coluna = tam-1
        return voltaLinhaContinuaColuna(positions.linha, positions.coluna)
      }
      if(coluna>0) {
        return pulaLinhaDiminuiColuna(linha, coluna)
      }
    }
    if(linha >= 5){
      let ultimaPosicao = distribuicao[linha-2].length-1
      if(coluna===0 && ultimaPosicao > 2) {
        // positions.linha = linha-2
        // positions.coluna = ultimaPosicao
        return volta2LinhasUltimaColuna(linha, ultimaPosicao)
        // return [positions.linha, positions.coluna]
      }
      if(coluna > 0) {
        return pulaLinhaDiminuiColuna(linha, coluna)
      }
    }
  }

  const start = [0,0]
  console.log(distribuicao[start[0]][start[1]])
  let next = getNextElement(start)
  if(next) console.log(distribuicao[next[0]][next[1]])
  while(next) {
    next = getNextElement(next)
    if(next) console.log(distribuicao[next[0]][next[1]])
  }
}