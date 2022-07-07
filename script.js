
const calcular = document.getElementById('calcBtn') /* BOTÃO */

function calcIMC(){ /* FUNÇÃO QUE PROCESSA TODOS OS DADOS */
    const nome = document.getElementById('name').value /* ENTRADA DE DADOS */ 
    const peso = document.getElementById('peso').value /* ENTRADA DE DADOS */
    const altura = document.getElementById('altura').value /* ENTRADA DE DADOS */
    const resultado = document.getElementById('calculo')
    if(nome !== '' && peso !== '' && altura !== ''){ /* SE OS CAMPOS ESTIVEREM PREENCHIDOS */
        const imc = (peso / (Math.pow(altura,2))) /* FÓRMULAD IMC */
        let classificacao = '' /* ESTADO DA PESSOA */
        if(imc < 18.5){
            classificacao = "abaixo do peso"
        }
        else if(imc >= 18.5 && imc <= 24.9){
            classificacao = "com peso ideal.\nParabéns!"
        }
        else if(imc >= 25.0 && imc <=29.9){
            classificacao = "levemente acima do peso"                
        }
        else if(imc >= 30 && imc <=34.9){
            classificacao = "com grau de obesidade I"            
        }
        else if(imc >= 35.0 && imc <= 39.9){
            classificacao = "com grau de obesidade II"
        }
        else{
            classificacao = "com grau de obesidade III"
        }
        resultado.style.color = 'white' /* DEFININDO A COR DO TEXT0 */
        resultado.style.fontSize = '16px' /* O TAMANHO DO TEXTO */
        resultado.textContent = `${nome} seu IMC é ${imc.toFixed(2)} e você está ${classificacao}` /* MENSAGEM QUE SERÁ IMPRESSA */
    }
    else{ /* SE NÃO */
        alert('Você não preencheu todos os campos!\nPreencha os campos antes de clicar no botão!')
    }
}
calcular.addEventListener('click', calcIMC) /* CHAMANDO A FUNÇÃO ATRAVÉS DO CLICK NO BOTÃO */