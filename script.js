let firstNumber = prompt("Insira o primeiro número: ")
let secondNumber = prompt("Insira o segundo número: ")

const sum = Number(firstNumber) + Number(secondNumber)
const sub = Number(firstNumber) - Number(secondNumber)
const mult = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)
const restdiv = Number(firstNumber) % Number(secondNumber)

alert("A soma dos dois numeros é : " + sum)
alert("A subtração dos dois numeros é : " + sub)
alert("A multiplicação dos dois numeros é : " + mult)
alert("A divisão dos dois numeros é : " + div)
alert("O restante da divisão dos dois numeros é : " + restdiv)

let evenORodd = (sum % 2) == 0
let equals = Number(firstNumber) == Number(secondNumber)

if (evenORodd){
    alert("A soma dos dois números é par!")
}
else {
    alert("A soma dos dois números é impar!")
}
if (equals){
    alert("Os números inseridos são iguais!")
}
else {
    alert("Os números inseridos são diferentes!")
}