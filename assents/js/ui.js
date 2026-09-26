/*CAMPO DE ALERTAS*/
let alerta = document.querySelector(".alertas")
function off(){
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 5000);
}

/*TABELA AONDE O USUÁRIO CONSULTA OS SEUS NUMEROS ESCOLHIDOS*/
let containerUsuario = document.querySelector('#tabelaUsuario')
function fecharTabela(){
    containerUsuario.style.display = 'none'
}


/*ABERTURA E FECHADURA DO MENU LATERAL*/
let menu = document.querySelector('#container-menu');
function abrirMenu(){
    menu.style.display = 'flex';
}
function fecharMenu(){
    menu.style.display = 'none';
}


/*ABERTURA E FECHADURA DO MODAL DO FORMULÁRIO*/
let container_formulario = document.querySelector('.formulario')
function abrirFormulario(){
    container_formulario.style.display = 'flex'
}
function fecharFormulario(){
    container_formulario.style.display = 'none'
}


