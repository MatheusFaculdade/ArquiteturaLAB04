## Executar
1. Instale as dependências:

    ```bash
    npm install
    ```

2. Compile o código TypeScript:

    ```bash
    npx run dev
    ```
## Diagrama UML
![Diagrama UML do Sistema de Biblioteca](public/uml.png)


## Teste

O programa cria duas reservas no hotel, uma para o quarto 101 e outra para o quarto 102, registrando-as no sistema. Em seguida, consulta o status do quarto 101, exibindo as informações da reserva no console. Depois, a reserva do quarto 101 é cancelada e o programa tenta consultar o status desse quarto novamente, agora indicando que ele está disponível. Por fim, o sistema exibe uma mensagem de erro caso o número do quarto consultado ou cancelado não esteja registrado, garantindo que o controle das reservas seja preciso.
