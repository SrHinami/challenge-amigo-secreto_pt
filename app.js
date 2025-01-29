// Primeiro preciso criar as variáveis para guardar os nomes
let amigos = [];

//Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    inputAmigo.Value = "";

//Ter a certeza que o campo não ficou vazio
if (nomeAmigo == "") {
    alert('Por favor, insira um nome.');
    return;
}

//Ver se o nome não está repetido
if(amigos.includes(nomeAmigo)) {
    alert(`O nome ${nomeAmigo} já está adicionado na lista`);
    return;
}
  
//Adicionar o nome ao array de amigos
amigos.push(nomeAmigo);


//Limpar o campo de entrada
inputAmigo.ariaValu = "";

//Atualizar a lista
atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar o campo
    for(let i = 0; i <amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li) // Criar sequência na lista

    }

}

function sortearAmigo() {
    if(amigos.length == 0) {
        alert('Não tem como sortear. É preciso ter pelo menos um.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio]; 

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong`; // strong usado para dar importância ao texto

}