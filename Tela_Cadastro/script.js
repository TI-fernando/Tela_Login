let btn = document.querySelector('#verSenha')
let btnConfirma = document.querySelector('#verConfirmaSenha')

let  nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let  usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let  senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha= false

let  confirmaSenha= document.querySelector('#confirmaSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validConfimaSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    }else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha= false
    }else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha= true
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color:red')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmaSenha.setAttribute('style', 'border-color: red')
        validConfimaSenha = false
    }else {
        labelConfirmaSenha.setAttribute('style', 'color:green')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style', 'border-color: green')
        validConfimaSenha = true
    }
})


function cadastrar() {
    if(validNome || validUsuario || validSenha || validConfimaSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>'
        msgError.setAttribute('style', 'display: none') 
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/Tela_Login/index.html'
        }, 30000)

    } else {
        msgError.setAttribute('style', 'display: block') 
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar.</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
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
