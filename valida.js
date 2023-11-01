const form = document.getElementById('form-compare');
let validaNumero = false;
const numeroA = document.getElementById('numberA');
const numeroB = document.getElementById('numberB');


function comparaNumero(numeroA, numeroB) {
    let num1 = parseInt(numeroA)
    let num2 = parseInt(numeroB)
    return num1 < num2;
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const mensagemSucesso = `O Numero A:${numeroA.value} é menor que B:${numeroB.value}`;
    const mensagemErro = `O Numero A:${numeroA.value} é maior que B:${numeroB.value} digite um valor menor!`;

    validaNumero = comparaNumero(numeroA.value, numeroB.value)
    if (validaNumero) {
        const containerMensagem = document.querySelector('.confirm-menssage');
        containerMensagem.innerHTML = mensagemSucesso;
        containerMensagem.style.display = 'block';

        numeroA.value = ' ';
        numeroB.value = ' ';
    }
    else {

        const containerMensagem = document.querySelector('.confirm-menssage');
        containerMensagem.innerHTML = mensagemErro;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'red';
    }
}
)

