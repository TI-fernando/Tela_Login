let btn = document.querySelector('#verSenha')
let btnConfirme = document.querySelector('#verConfirmeSenha')

let  nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let  usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let  senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let  confirmaSenha= document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = '*Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
    }else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = '*Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
    }else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
    }
})


function cadastrar() {
    
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirme.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmeSenha')

    if (inputConfirmeSenha.getAttribute('type') == 'password') {
        inputConfirmeSenha.setAttribute('type', 'text')
    } else {
        inputConfirmeSenha.setAttribute('type', 'password')
    }
})
