// crie um programa que lê do terminal dois números, 
// faça a comparação deles e mostre o resultado
import leitor from '../../../../lib/leitor.mjs'

const numero1 = await leitor('Digite o primeiro número > ')

const numero2 = await leitor('Digite o segundo número > ')

if (operador == '+') {
  console.log(parseInt(numero1) + parseInt(numero2))
} else if (operador === '-') {
  console.log(numero1 - numero2)
} else if (operador === '*') {
  console.log(numero1 * numero2)
} else if (operador === '/') {
  console.log(numero1 / numero2)
} else if (operador === '%') {
  console.log(numero1 % numero2)
}

