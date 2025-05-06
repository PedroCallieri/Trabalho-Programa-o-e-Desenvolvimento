//1. Mostre apenas os números pares de 1 a 20
function par(){
let numero = 1
 while(numero <= 20){
        let resto = numero % 2 
        if(resto === 0) alert("Número: " + numero + " é Par")
            numero++
 } 
}

//2. Mostre apenas os números ímpares de 1 a 20.
function impar(){
    let numero = 1
    while(numero <= 20){
        let resto = numero % 2
        if(resto != 0) alert("Número "+ numero +" é Impar")
            numero++
    }
}
 
//3. Imprima “Olá, mundo!” 5 vezes.
function ola(){
    let frase = 1
    while(frase <= 5){
        alert ("Olá Mundo!")
        frase++
    }
}

//4. Conte de 0 a 50 pulando de 5 em 5.
function Contagem(){
    let contagepular = 5
    while(contagepular === 50){
        let soma = contagepular + 5
        alert('Vai Pulando pae'+ contagepular)
    }
        
}






