class Reserva {
    private numeroQuarto: number
    private nomeHospede: string
    private dataEntrada: Date
    private dataSaida: Date

    public getNumeroQuarto(): number {
        return this.numeroQuarto;
    }

    public setNumeroQuarto(numeroQuarto: number): void {
        this.numeroQuarto = numeroQuarto;
    }

    public getNomeHospede(): string {
        return this.nomeHospede;
    }

    public setNomeHospede(nomeHospede: string): void {
        this.nomeHospede = nomeHospede;
    }

    public getDataEntrada(): Date {
        return this.dataEntrada;
    }

    public setDataEntrada(dataEntrada: Date): void {
        this.dataEntrada = dataEntrada;
    }

    public getDataSaida(): Date {
        return this.dataSaida;
    }

    public setDataSaida(dataSaida: Date): void {
        this.dataSaida = dataSaida;
    }


    constructor(
        numeroQuarto: number,
        nomeHospede: string,
        dataEntrada: Date,
        dataSaida: Date
    ) {
        this.numeroQuarto = numeroQuarto
        this.nomeHospede = nomeHospede
        this.dataEntrada = dataEntrada
        this.dataSaida = dataSaida
    }

}
export default Reserva;
