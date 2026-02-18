let nome = document.getElementById("nome");
let email = document.getElementById("email");
let salvar = document.getElementById("salvar");
let editar = document.getElementById("editar");
let resul = document.getElementById("resul");
let proximoId = 1;

salvar.addEventListener("click", adicionar);
editar.addEventListener("click", edit);

let users = [];

function adicionar() {
  let nomeDigitado = nome.value;
  let emailDigitado = email.value.trim().toLowerCase();

  if (nomeDigitado.trim() === "") {
    alert("Digite um nome para adicionar aos usuarios");
    return;
  }

  if (emailDigitado.trim() === "") {
    alert("digite um email para adicionar aos usuarios");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailDigitado) {
      alert("Email já cadastrado");
      return;
    }
  }

  let novoUsuario = { id: proximoId, nome: nomeDigitado, email: emailDigitado };

  proximoId++;
  users.push(novoUsuario);
  nome.value = "";
  email.value = "";
  nome.focus();
  renderizarUsuarios();
}

function renderizarUsuarios() {
  resul.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let usuarioDiv = document.createElement("div");
    usuarioDiv.textContent = `Nome: ${user.nome} Email: ${user.email}`;

    resul.appendChild(usuarioDiv);

    let botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";

    let botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "Deletar";

    botaoEditar.dataset.id = user.id;
    botaoDeletar.dataset.id = user.id;

    botaoEditar.addEventListener("click", function () {
      let idDoUsuario = Number(this.dataset.id);

      let usuario = users.find((u) => u.id === idDoUsuario);

      nome.value = usuario.nome;
      email.value = usuario.email;

      idEmEdicao = idDoUsuario;

      salvar.textContent = "Atualizar";
    });

    usuarioDiv.appendChild(botaoEditar);
    usuarioDiv.appendChild(botaoDeletar);
  }
}

function edit() {}
