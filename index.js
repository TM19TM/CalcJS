function insert(num){
    // Obtém o valor atual exibido no elemento com o ID 'RESULTADO'
    var numero = document.getElementById('RESULTADO').innerHTML;
    // Atualiza o conteúdo do elemento 'RESULTADO', concatenando o número ou caractere inserido
    document.getElementById('RESULTADO').innerHTML = numero + num;
}

function clean(){
    // Limpa o conteúdo do elemento 'RESULTADO', deixando-o vazio
    document.getElementById('RESULTADO').innerHTML = "";
}

function back(){
    // Obtém o valor atual do elemento 'RESULTADO'
    var resultado = document.getElementById('RESULTADO').innerHTML;
    // Remove o último caractere do valor atual e atualiza o conteúdo do elemento
    document.getElementById('RESULTADO').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    // Obtém o valor atual do elemento 'RESULTADO'
    var resultado = document.getElementById('RESULTADO').innerHTML;
    // Verifica se o campo de resultado não está vazio
    if (resultado){
        // Se houver conteúdo, executa o cálculo usando 'eval' e exibe o resultado
        document.getElementById('RESULTADO').innerHTML = eval(resultado);
    } else {
        // Se não houver conteúdo, exibe uma mensagem informando que não há nada a calcular
        document.getElementById('RESULTADO').innerHTML = "Nada...";
    }
}