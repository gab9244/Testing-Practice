//Escreva que recebe uma string e retorna a string com o primeiro caractere em maiusculo
function capitalized(string){    
     return string[0].toUpperCase()+string.slice(1)
}

//Escreva uma função que recebe uma string e a retorna invertida
function reverseString(string){
     return string.split('').reverse().join('')
}


//Crie um objeto calculadora que guarda quarto funções  adicionar, subtrair, dividir, multiplicar

function adicionar(a,b){
     return a + b
}
function subtrair(a,b){
     return a - b
}
function dividir(a,b){
     return a/b
}
function multiplicar(a,b){
     return a * b
}

const calculadora = {
     adicionar,
     subtrair,
     dividir,
     multiplicar,
}
//Crie um função que representa a criptocrafia de ceasar. A criptocrafia de ceasar consiste em mudar uma letra um certa quantidade de vezes. Ex: a muda 4 vezes = d
//e(x) = (x + k)  
//k = posição 
//x = charactere que queremos mudar
function caesarCipher(text, s)
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}

//Crie uma função analyzeArray que recebe uma array de números e retorna um objeto com as propriedades  meio, min, max, tamanho

function analyzeArray(array){
    let sorted = array.sort(function(a,b){return a-b})
    let meio = sorted.length/2
    let min = sorted[0]
    let max = sorted[sorted.length-1]
    
    let propriedades = {
      meio: meio,
      min:min,
      max:max,
      length:sorted.length
    }
    return propriedades
    
}
console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = capitalized
module.exports = reverseString
module.exports = calculadora
module.exports = caesarCipher
module.exports = analyzeArray

