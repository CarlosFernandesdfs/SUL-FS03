// var passo;
// for (passo = 0; passo < 5; passo++) {
//   // Executa 5 vezes, com os valores de passos de 0 a 4.
//   console.log("Este é o passo: ", passo)
//   console.log("Ande um passo para o leste");
// }

// function quadrado(numero) {
//   return numero * numero
// }

// var valor = quadrado(2)

// console.log(valor)

const readline = require('readline')
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function processamento (resposta) {
  if (resposta == 5) {
    console.log('Nada! Sai fora! Fatal! Cansado!')
  } else {
    let passo
    for (passo = 0; passo < resposta; passo++) {
      console.log("Este é o passo: ", passo + 1)
    }
  }
  leitor.close()
}

leitor.question('Quantos passos você deseja dar?\n', processamento)