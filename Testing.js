//Escreva que recebe uma string e retorna a string com o primeiro caractere em maiusculo
function capitalized(string){    
     return string[0].toUpperCase()+string.slice(1)
}

//Escreva uma função que recebe uma string e a retorna invertida
function reverseString(string){
     return string.split('').reverse().join('')
}


//Crie um objeto calculadora que guarda quatro funções  adicionar, subtrair, dividir, multiplicar

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
//Crie uma função que representa a criptocrafia de Caesar. A criptocrafia de Caesar consiste em mudar uma letra uma certa quantidade de vezes. Ex: a muda 4 vezes = e
//e(x) = (x + k)  
//k = posição 
//x = charactere que queremos mudar
function caesarCipher(string, posição){
    //Crie uma variavel alfabeto que possui como valor as letras do alfabeto
     const alfabeto = "abcdefghijklmnopqrstuvwxyz";
     const mapa = {};
     //A variavel resultado receberar a string depois do processo de códificação
     let resultado = "";
     for(let i = 0; i<alfabeto.length;i++){
          //Dentro do objeto mapa passamos cada letra como propriedades e o i como valor, sendo o valor a posição da letra e fazemos com que o valor das letras mude dependendo da posição(O parâmetro) informada, assim mudamos a posição/valor das letras
          mapa[alfabeto[i]] = i + posição;
          //Se o valor da letra passar de 25, subtraia seu valor em 26. Isso é necessário, pois quando mudamos o valor de cada letra com o parâmetro posição, algumas letras terâo um valor superior a 25 e com isso sairão do alfabeto
          if(mapa[alfabeto[i]] > 25 ){
               mapa[alfabeto[i]] -= 26;
          }
     }
     // Criamos outro loop que usa o tamanho da string passada para fazer os loops
     for(let i=0; i< string.length; i++){
          //Crie a variavel char que possui como valor o primeiro caractere da string e a cada loop avança um caractere
          let char = string[i];
          //Se o caractere não for um espaço faça o seguinte: Concatene á variavel resultado ao caractere do alfabeto que possui como index uma propriedade do objeto mapa igual ao caractere do parâmetro string. Fazemos com que o valor mude usando como index do parâmetro string a variavel i do loop for
          if(char !== " "){
               resultado += alfabeto[mapa[string[i]]];
          }
     }
     //Por fim retornamos a variavel resultado que agora tem como valor a string códificada
     return resultado
}


//Crie uma função analyzeArray que recebe uma array de números e retorna um objeto com as propriedades meio, min, max e length

function analyzeArray(array){
    let sorted = array.sort(function(a,b){return a-b})
    
    let propriedades = {
      meio: sorted.length/2,
      min:sorted[0],
      max:sorted[sorted.length-1],
      length:sorted.length
    }
    return propriedades
    
}

module.exports = capitalized
module.exports = reverseString
module.exports = calculadora
module.exports = caesarCipher
module.exports = analyzeArray

