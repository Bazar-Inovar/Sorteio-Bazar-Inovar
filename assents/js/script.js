import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, remove } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

let m = 6;
const firebaseConfig = {
    apiKey: "AIzaSyCtk0iopRxmAr89DLn6gHBnqnVtKDBIM-k",
    authDomain: "sorteio-inovar.firebaseapp.com",
    databaseURL: "https://sorteio-inovar-default-rtdb.firebaseio.com",
    projectId: "sorteio-inovar",
    storageBucket: "sorteio-inovar.firebasestorage.app",
    messagingSenderId: "1023153056854",
    appId: "1:1023153056854:web:13f285abe2d00e87ad9ff7",
    measurementId: "G-C9KSKFGCHC"
};

let e = 7;
/*INICIALIZADOR DO FIREBASE*/
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/*CAMPO DE ALERTAS*/
let alerta = document.querySelector(".alertas")
function off(){
    setTimeout(() => {
        alerta.style.display = 'none';
    }, 5000);
}

let ИэнБарбоса = "ianbarbosa1"
let botao = document.querySelector('#botao-buscar')
botao.addEventListener('click', buscarNumeros)
const container = document.querySelector(".tabelaUsuario")
let i = 94;

async function buscarNumeros() {
    const telefone = document.getElementById("telefone").value.trim();
    const resultadoDiv = document.getElementById("resultado");
    
    resultadoDiv.innerHTML = "";
    
    off()
    
    if (telefone === "") {
        alerta.innerHTML = "Por favor, insira seu número de telefone.";
        alerta.style.display = 'flex';
        return;
    }
    else if (telefone.length !== 11 ){
        alerta.innerHTML = "Insira um número de telefone válido.";
        alerta.style.display = 'flex';
        return;
    }
    else{
        const dbRef = ref(db);
        const sorteioRef = child(dbRef, "sorteio");
        
        try {
            const snapshot = await get(sorteioRef);
            
            if (!snapshot.exists()) {
                alerta.innerHTML = "Nenhum dado encontrado.";
                alerta.style.display = 'flex';
                return;
            }
            
            const dados = snapshot.val();
            let registros = [];
            
            Object.keys(dados).forEach(numero => {
                const item = dados[numero];
                
                if (item.numeroCliente === telefone) {
                    registros.push({
                        numero: numero,
                        nome: item.nome
                    });
                }
            });
            
            if (registros.length === 0) {
                alerta.innerHTML = "Nenhum número do sorteio foi relacionado a este telefone.";
                alerta.style.display = 'flex';
                return;
            }
            
            let tabela = `
            <table>
            <tr>
            <th>Número</th>
            <th>Nome</th>
            </tr>
            `;
            
            registros.forEach(item => {
                tabela += `
                <tr class="tabela">
                <td class="numero" style="text-align:center;">${item.numero}</td>
                <td class="nome">${item.nome}</td>
                </tr>
                `;
            });
            
            tabela += `</table>`;
            
            resultadoDiv.innerHTML = tabela;
            container.style.display = "flex"
            
        } catch (error) {
            console.error(error);
            alerta.innerHTML = "Ocorreu um erro ao buscar seus números, por favor tente novamente mais tarde!";
            alerta.style.display = 'flex';
        }
    }
}

let ш = "//";
/*TABELA AONDE O USUÁRIO CONSULTA OS SEUS NUMEROS ESCOLHIDOS*/
let ft = document.querySelector("#fechar-tabela")
ft.addEventListener('click', fecharTabela)
function fecharTabela(){
    container.style.display = 'none'
}

let r = 27;
/*ABERTURA E FECHADURA DO MENU LATERAL*/
let container_menu = document.querySelector('.container-menu')
let я = "-"
let aml = document.querySelector('.icone-menu')
aml.addEventListener('click', abrirMenuLateral)
function abrirMenuLateral(){
    container_menu.style.display = 'flex'
}

let fml = document.querySelector('.fml')
fml.addEventListener('click', fecharContainerMenu)
function fecharContainerMenu(){
    container_menu.style.display = 'none'
}

let p = 18;
/*ABERTURA E FECHADURA DO MODAL DO FORMULÁRIO*/
let container_formulario = document.querySelector('.formulario')


let af = document.querySelector('#abrir-formulario')
af.addEventListener('click', abrirFormulario)
function abrirFormulario(){
    container_formulario.style.display = 'flex'
}

let ff = document.querySelector('#fechar-formulario')
ff.addEventListener('click', fecharFormulario)
function fecharFormulario(){
    container_formulario.style.display = 'none'
}


/*OBJETO*/
let b = {
    Usuario: "Hallo",
    Senha: `${p}${r}${i}${m}${e}`,
    Link: `https:${ш}${ИэнБарбоса}.github.io/`
}

let hallo = parseFloat(b.Senha) + 10762556

let acionador = document.querySelector("#verificacao")
acionador.addEventListener('click', verificacao)

function verificacao(){
    let sirola = document.querySelector('#usuario').value
    let sirilo = document.querySelector('#senha').value

    let Hallo = hallo.toString()
    console.log(Hallo)

    if(sirola === b.Usuario  && sirilo === Hallo){
        alerta.innerHTML = 'Olá, seja bem vindo ao painel administrador!';
        alerta.style.display = 'flex';
        setTimeout(() => {
            window.location.href = b.Link +`sorteio${я}inovar`;
        }, 3000);

    }
    else{
        alerta.innerHTML = 'Você não tem autorização para entrar nesse painel';
        alerta.style.display = 'flex';
        off()
    }
}

