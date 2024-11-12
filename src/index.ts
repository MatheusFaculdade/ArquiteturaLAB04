import GestorTarefas from './models/gestorTarefas';
import Tarefa from './models/tarefa';
import StatusTarefa from './enums/statusTarefa';

function main() {


const gestor = new GestorTarefas();

//instâncias de Tarefa
const tarefa1 = new Tarefa(1, "Estudar TypeScript", StatusTarefa.Pendente, "Projeto A");
const tarefa2 = new Tarefa(2, "Desenvolver API", StatusTarefa.EmProgresso, "Projeto B");
const tarefa3 = new Tarefa(3, "Testar funcionalidades", StatusTarefa.Pendente, "Projeto A");

// adiciona tarefas ao sistema
gestor.adicionarTarefa(tarefa1);
gestor.adicionarTarefa(tarefa2);
gestor.adicionarTarefa(tarefa3);

console.log("Tarefas adicionadas com sucesso.");

// atualiza o status de uma das tarefas
gestor.atualizarStatus(1, StatusTarefa.Concluida);
gestor.atualizarStatus(2, StatusTarefa.Concluida);

// conslta tarefas do "Projeto A" e exibindo no console
console.log("Consultando tarefas do Projeto A:");
gestor.consultarTarefasPorProjeto("Projeto A");


}

main();
