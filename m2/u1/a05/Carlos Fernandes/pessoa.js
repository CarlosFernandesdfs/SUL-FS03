

const { link } = require('fs')
const readline = require('readline')
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const pessoa = require ('./pessoa_2')

function processar (ano_nascimento) {
   console.log(pessoa.calcular_idade(ano_nascimento))
  leitor.close()
  
}

leitor.question('Digite o ano de nascimento >', processar)

