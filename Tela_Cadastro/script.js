let btn = document.querySelector('#verSenha')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirme = document.querySelector('#verConfirmeSenha')

btnConfirme.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmeSenha')

    if (inputConfirmeSenha.getAttribute('type') == 'password') {
        inputConfirmeSenha.setAttribute('type', 'text')
    } else {
        inputConfirmeSenha.setAttribute('type', 'password')
    }
})