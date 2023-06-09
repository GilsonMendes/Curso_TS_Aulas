let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let listaSalva: string | null = localStorage.getItem("@listagem_tarefas");
let tarefas: string[] = listaSalva !== null && JSON.parse(listaSalva) || [];
function listaTarefas() {
  listElement.innerHTML = "";
  tarefas.map((item) => {
    let todoElement = document.createElement("li");
    let tarefaTxt = document.createTextNode(item);

    todoElement.appendChild(tarefaTxt);
    listElement.appendChild(todoElement);
  });
}

listaTarefas();

function adicionarTarefa() {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa!");
    return false;
  } else {
    let tarefaDigitada: string = inputElement.value;
    tarefas.push(tarefaDigitada);
    inputElement.value = "";
    listaTarefas();
    salvarDados();
  }
}

buttonElement.onclick = adicionarTarefa;

function salvarDados() {
  localStorage.setItem("@listagem_tarefas", JSON.stringify(tarefas));
}
