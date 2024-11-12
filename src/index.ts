import Hotel from "./models/hotel";
import Reserva from "./models/reserva";

function main() {
const reserva1 = new Reserva(101, "Alice", new Date("2023-11-01"), new Date("2023-11-05"));
const reserva2 = new Reserva(102, "Bob", new Date("2023-11-02"), new Date("2023-11-06"));

// Criando instância do Hotel
const hotel = new Hotel();

// Registrando Reservas
hotel.registrarReserva(reserva1);
hotel.registrarReserva(reserva2);

// Consultando o status de um quarto
hotel.consultarStatusQuarto(101);

// Cancelando uma reserva
hotel.cancelarReserva(101);

// Verificando novamente o status do quarto após o cancelamento
hotel.consultarStatusQuarto(101);

}

main();
