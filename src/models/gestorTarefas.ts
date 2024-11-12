import Tarefa from './tarefa'
import StatusTarefa from '../enums/statusTarefa';

class GestorTarefas{
    private tarefa: Tarefa [] = []

    public adicionarTarefa(tarefa: Tarefa):void{
        this.tarefa.push(tarefa);
    }

    public atualizarStatus(id:number, status:StatusTarefa):void{
        const tarefa = this.tarefa.find(t => t.getId() === id);
        if (tarefa) {
            tarefa.setStatus(status);
            console.log(`Status da tarefa com ID ${id} atualizado para: ${status}`);
        } else {
            console.error(`Tarefa com ID ${id} não encontrada.`);
        }
    }
    public consultarTarefasPorProjeto(projeto:string){
        const tarefas = this.tarefa.filter(t => t.getProjeto() === projeto);

        if(tarefas){
            tarefas.forEach(tarefa => {
                console.log(`ID: ${tarefa.getId()}`);
                console.log(`Descrição: ${tarefa.getDescricao()}`);
                console.log(`Status: ${tarefa.getStatus()}`);
                console.log(`Projeto: ${tarefa.getProjeto()}`);
                console.log('---------------------------');
            });
        }
        
        return tarefas;
    }
}
export default GestorTarefas;