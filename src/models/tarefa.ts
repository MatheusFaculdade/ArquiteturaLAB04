import StatusTarefa from "../enums/statusTarefa";

class Tarefa {
    private id: number
    private descricao: string
    private status: StatusTarefa
    private projeto: string

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getStatus(): StatusTarefa {
        return this.status;
    }

    public setStatus(status: StatusTarefa): void {
        this.status = status;
    }

    public getProjeto(): string {
        return this.projeto;
    }

    public setProjeto(projeto: string): void {
        this.projeto = projeto;
    }


    constructor(
        id: number,
        descricao: string,
        status: StatusTarefa,
        projeto: string
    ) {
        this.id = id
        this.descricao = descricao
        this.status = status
        this.projeto = projeto
    }


}
export default Tarefa; 