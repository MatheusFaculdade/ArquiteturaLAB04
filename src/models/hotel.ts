import Reserva from "./reserva";

class Hotel{
    private reserva: Reserva[] = [];

    public registrarReserva(reserva: Reserva){
        this.reserva.push(reserva);
    }
    public cancelarReserva(numeroQuarto: number): void {
        const index = this.reserva.findIndex(r => r.getNumeroQuarto() === numeroQuarto);
        if (index !== -1) {
            this.reserva.splice(index, 1);
        }
        else{
            console.error("Número do quarto não encontrado!")
        }
    }
    
    public consultarStatusQuarto(numeroQuarto: number){
        const quarto = this.reserva.find(r => r.getNumeroQuarto() === numeroQuarto);
        if(quarto){
            console.info(`Quarto ${quarto?.getNumeroQuarto()}\nHospede: ${quarto?.getNomeHospede()}\nData de entrada: ${quarto?.getDataEntrada()}\nData de saída: ${quarto?.getDataSaida()}\n`);
        }
        else{
            console.error("Quarto não encontrado!")
        }
        return quarto;
    }
}
export default Hotel;