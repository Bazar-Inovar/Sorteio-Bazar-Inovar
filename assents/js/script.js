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

const containerUsuario = document.querySelector("#tabelaUsuario")
let referencia = document.querySelector('#number')
let btn = document.querySelector('#btn-buscar')
btn.addEventListener('click', buscarNumeros)

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
            <table class="table table-bordered text-center fw-medium">
                <tr>
                    <th>Número</th>
                    <th>Nome</th>
                </tr>
            `;
            
            registros.forEach(item => {
                tabela += `
                <tr>
                    <td>${item.numero}</td>
                    <td>${item.nome}</td>
                </tr>
                `;
            });
            
            tabela += `</table>`;
            
            resultadoDiv.innerHTML = tabela;
            referencia.innerHTML = `Ref: ${telefone}`;
            containerUsuario.style.display = "flex";
            
        } catch (error) {
            console.error(error);
            alerta.innerHTML = "Ocorreu um erro ao buscar seus números, por favor tente novamente mais tarde!";
            alerta.style.display = 'flex';
        }
    }
}
