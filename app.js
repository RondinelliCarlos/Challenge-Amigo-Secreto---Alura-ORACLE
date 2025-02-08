//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  let inserirAmigo = document.getElementById('amigo');
  let nomeDoAmigo = inserirAmigo.value.trim();

  // Validar se o campo está vazio
  if (nomeDoAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adicionar ao array e limpar o campo
  amigos.push(nomeDoAmigo);
  inserirAmigo.value = "";

  // Atualizar a lista de amigos
  atualizarListaAmigos();
}

// Função para atualizar a lista exibida no HTML
function atualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  // Percorrer o array e adicionar cada nome à lista
  amigos.forEach((amigo) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "";

  // Validar se há amigos para sortear
  if (amigos.length === 0) {
    resultado.innerHTML = "Nenhum amigo disponível para sortear.";
    return;
  }

  // Gerar um índice aleatório
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  // Exibir o resultado
  resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
