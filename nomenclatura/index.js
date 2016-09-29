const sufixos = [
	{
    grupoFuncional: 'Hidrocarboneto',
    sufixo: 'o',
  },
  {
    grupoFuncional: 'Alcool',
    sufixo: 'ol',
  },
 {
    grupoFuncional: 'Aldeído',
    sufixo: 'al',
  },
  {
    grupoFuncional: 'Cetona',
    sufixo: 'ona',
  },
  {
    grupoFuncional: 'Amina',
    sufixo: 'amina',
  },
  {
    grupoFuncional: 'Amida',
    sufixo: 'amida',
  }
   
]

const prefixos = [
  {
    descricao: 'Cadeia que contém apenas um carbono',
    prefixo: 'met'
  },
  {
    descricao: 'Cadeia que contém dois carbonos',
    prefixo: 'et'
  },
  {
    descricao: 'Cadeia que contém três carbonos',
    prefixo: 'prop'
  }

]

const infixos = [
  {
    descricao: 'Possui ligação simples',
    infixo: 'an'
  },
  {
    descricao: 'Possui ligação dupla',
    infixo: 'en'
  },
  {
    descricao: 'Possui ligação tripla',
    infixo: 'in'
  }
]

const findInfixo = (molecula) => {
  let result = ''

  infixos.forEach((el, i) => {
    if (molecula.search(el.infixo) >= 1) result = el.descricao
  })
  return result
}

const findSufixo = (molecula) => {
  let grupo = ''
  sufixos.forEach((el, i) => {
    if (molecula.endsWith(el.sufixo)) grupo = el.grupoFuncional
  })
  return grupo
}

const findPrefixo = (molecula) => {
  let descricao = ''
  prefixos.forEach((el, i) => {
    if (molecula.startsWith(el.prefixo)) descricao = el.descricao
  })
  return descricao
}

console.log('etanol: ', findSufixo('etanol'))
console.log('metanal: ', findSufixo('metanal'))
console.log('propanamina: ', findSufixo('propanamina'))
console.log('butanamida: ', findSufixo('butanamida'))
console.log('metano: ', findSufixo('metano'))

console.log('metano: ', findPrefixo('metano'))
console.log('etano: ', findPrefixo('etano'))
console.log('propano: ', findPrefixo('propano'))

console.log('metano: ', findInfixo('metano'))
console.log('penteno: ', findInfixo('penteno'))
console.log('pentino: ', findInfixo('pentino'))