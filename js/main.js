$(`#telefone`).mask(`(00) 00000-0000`, {
    placeholder: `(__) _____-____`
})
$(`#cep`).mask(`00000-000`, {
    placeholder: `_____-___`
})
$(`form`).validate({
    rules: {
        nome: { required: true },
        email: { required: true, email: true },
        telefone: { required: true },
        enderecoCompleto: { required: true },
        CEP: { required: true }
    },
    messages: {
        nome: `Por favor, insira o seu nome`,
        telefone: `Insira um numero de celular`

    },
    submitHandler: function (form) {
        console.log(form)
    },
})
