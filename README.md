# Gerenciador de Carteira Ethereum

Este projeto fornece uma interface simples para interagir com a blockchain Ethereum, permitindo que você consulte saldos, realize transferências, obtenha recibos de transações e muito mais.

## Funcionalidades

-   **Consulta de Saldo:** Obtenha o saldo de uma carteira Ethereum em ETH.
-   **Transferência de ETH:** Envie ETH para outros endereços.
-   **Recibo de Transação:** Consulte o recibo de uma transação na blockchain.
-   **Preços do Gás:** Obtenha os preços atuais do gás (wei, gwei, ETH).
-   **Estimativa de Gás:** Estime o gás necessário para uma transferência.
-   **Conversão de Valores:** Converta valores entre wei, gwei e ETH.

## Pré-requisitos

-   Node.js (versão 12 ou superior)
-   npm (Node Package Manager)
-   Conta Infura (para obter um URL de provedor Ethereum)
-   Arquivo `.env` com as seguintes variáveis de ambiente:
    -   `INFURA_URL`: URL do provedor Infura.
    -   `WALLET_ADDRESS`: Endereço da sua carteira Ethereum.
    -   `PRIVATE_KEY`: Chave privada da sua carteira Ethereum (⚠️ **Mantenha isso em segredo!**).

## Instalação

1.  Clone este repositório:

    ```bash
    git clone https://github.com/machadoborges1/eth-wallet-manager
    cd eth-wallet-manager
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente.

## Uso

1.  Execute o script `index.js`:

    ```bash
    node index.js
    ```

## Dependências

-   `dotenv`: Para carregar variáveis de ambiente de um arquivo `.env`.
-   `web3`: Para interagir com a blockchain Ethereum.
-   `web3-utils`: Para utilitários do Web3.js.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

## Autor

Humberto Machado

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

## Observações

-   ⚠️ **Segurança:** Nunca compartilhe sua chave privada com ninguém. Mantenha-a em segredo e use um serviço de gerenciamento de chaves seguro.
-   Este projeto é fornecido "como está", sem garantias. Use-o por sua conta e risco.
-   Certifique-se de ter saldo suficiente em sua carteira para pagar as taxas de gás ao realizar transferências.
-   Ao usar a função de transferir ether, tire o comentário das linhas de código da função main.