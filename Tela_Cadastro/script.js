let btn = document.querySelector('#verSenha')
let btnConfirma = document.querySelector('#verConfirmaSenha')

let  nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let  usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let  senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let  confirmaSenha= document.querySelector('#confirmaSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
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
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
    }else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
    }else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color:red')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmaSenha.setAttribute('style', 'border-color: red')
    }else {
        labelConfirmaSenha.setAttribute('style', 'color:green')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style', 'border-color: green')
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

btnConfirma.addEventListener('click', () => {
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if (inputConfirmaSenha.getAttribute('type') == 'password') {
        inputConfirmaSenha.setAttribute('type', 'text')
    } else {
        inputConfirmaSenha.setAttribute('type', 'password')
    }
})
