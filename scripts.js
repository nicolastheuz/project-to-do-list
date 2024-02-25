const buttom = document.querySelector('.buttom-task-add')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')

let minhalistadeitens = []

function adicionarnovatarefa() {
    minhalistadeitens.push({
        tarefa:input.value,
        concluida: false
        })



    
    mostrartarefas()
    input.value = ''
}


function mostrartarefas(){

    let novali = ''
    minhalistadeitens.forEach((item, posicao) => {
        novali = novali +`
        <li class="task ${item.concluida && "done"}">
         <img src="imgs/checked.png" alt="check" onclick="concluirtarefa(${posicao})" />
         <p>${item.tarefa}</p>
         <img src="imgs/trash.png" alt="lixeira" onclick='deletaritem(${posicao})' />
       </li>
        `
    })

    listacompleta.innerHTML = (novali)

    localStorage.setItem('lista', JSON.stringify(minhalistadeitens))
    
} 

function concluirtarefa(posicao){
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida
    mostrartarefas()

}

function deletaritem(posicao){
    minhalistadeitens.splice(posicao, 1)

    mostrartarefas()

}

function recarregartarefas(){
    const tarefasdolocalstorage = localStorage.getItem('lista')
    if (tarefasdolocalstorage) {
    minhalistadeitens = JSON.parse(tarefasdolocalstorage)
    }

    mostrartarefas()
}
recarregartarefas()

buttom.addEventListener('click',adicionarnovatarefa)