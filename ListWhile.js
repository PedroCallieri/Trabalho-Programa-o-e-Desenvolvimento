//1. Mostre apenas os números pares de 1 a 20
function par() {
    let numero = 1
    while (numero <= 20) {
        let resto = numero % 2
        if (resto === 0) alert("Número: " + numero + " é Par")
        numero++
    }
}

//2. Mostre apenas os números ímpares de 1 a 20.
function impar() {
    let numero = 1
    while (numero <= 20) {
        let resto = numero % 2
        if (resto != 0) alert("Número " + numero + " é Impar")
        numero++
    }
}

//3. Imprima “Olá, mundo!” 5 vezes.
function ola() {
    let frase = 1
    while (frase <= 5) {
        alert("Olá Mundo!")
        frase++
    }
}

//4. Conte de 0 a 50 pulando de 5 em 5.
function contagem() {
    let contapula = 0
    while (contapula <= 50) {
        alert("Pula de " + contapula)
        contapula = contapula + 5
    }
}

//5. Conte de 100 até 0 diminuindo de 10 em 10.
function Contagem() {
    let contapular = 0
    while (contapular <= 100) {
        alert("Pular de " + contapular)
        contapular = contapular + 10
    }
}

//6. Conte de 0 até 30 e mostre apenas os múltiplos de 3.
function multi() {
    let multiplos = 0
    while (multiplos <= 30) {
        alert("Os múltiplos de 3 até 30 são " + multiplos)
        multiplos = multiplos + 3
    }
}

//7. Conte de 1 até 10 e mostre o quadrado de cada número.
function quadrado() {
    let numero = 1
    while (numero <= 10) {
        let multipli = numero ** 2
        alert("O resultado de 1 a 10 elevado ao quadrado é "+ multipli)
        numero++
    }
}

//8. Conte de 1 até 10 e mostre o cubo de cada número.
function cubo(){
    let numero = 1
    while(numero <= 10){
        let multiplique = numero ** 3
        alert("O resultado de 1 a 10 elevado ao Cubo é "+ multiplique)
        numero++
    }
}

//9. Conte de 1 até 15 e mostre se o número é par ou ímpar.
function inteiros(){
    let numero = 1
    while(numero <= 15){
        let resto = numero % 2
        if(resto === 0){
            alert("Esse é um número Par "+ numero)
        }else{
            alert("Esse é um número Ìmpar "+ numero)
        }
        numero++
    }
}

//10. Conte até 100 e imprima somente os divisíveis por 4.
function contador(){
    let soma = 0 
    let numero = 1
    while(numero <= 100){
       numero = soma + numero
       if(numero % 4 === 0)
        alert("Os números de 1 a 100 divisíveis por 4 são "+numero)
       numero++
    }
}