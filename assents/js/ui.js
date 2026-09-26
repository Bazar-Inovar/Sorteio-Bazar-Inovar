/*CAMPO DE ALERTAS*/
function alerta(texto){
    let aviso = document.querySelector('.alertas');
    aviso.innerHTML = texto;
    aviso.style.opacity = '1';
    aviso.style.zIndex = '+99';
    aviso.innerHTML = texto;
    aviso.style.transform = 'translateY(0px)';

    setTimeout(() => {
        aviso.style.zIndex = '-99';
        aviso.style.opacity = '0';
        aviso.style.transform = 'translateY(50px)';
    }, 6000);
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
