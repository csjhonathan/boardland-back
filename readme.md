# Boardland-Back

O Boardland-Back é o backend de uma plataforma de e-commerce dedicada à venda de jogos de tabuleiro. Ele oferece uma variedade de recursos para gerenciar o fluxo de cadastro, login, carrinho, histórico e compra de jogos. O projeto foi construído usando Node.js, Express, MongoDB e outras tecnologias para fornecer uma experiência segura e eficiente aos usuários.

<h2>Recursos Principais</h2>

**Cadastro de Usuário**: Registro seguro de usuários com senhas criptografadas usando o bcrypt.

**Login de Usuário**: Autenticação de usuários com geração de tokens JWT.

**Carrinho de Compras**: Gerenciamento de carrinho de compras para adicionar, remover e finalizar compras.

**Histórico de Compras**: Registro de histórico de compras dos usuários.

**Envio de Confirmações**: Utilização do Nodemailer para enviar confirmações de compras por e-mail.

**Validação de Dados**: Utilização do Joi para garantir que os dados de entrada sejam válidos.

**Gestão de Datas**: Uso do Day.js para lidar com datas de maneira eficiente.

**Comunicação com Frontend**: Configuração do CORS para permitir comunicação entre frontend e backend de forma segura.

**MongoDB**: Banco de dados não relacional para persistência de dados.

<h2>Pré-requisitos</h2>

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

***Node.js***

***MongoDB***

(*e outras dependências listadas em package.json.*)

<h2>Configuração</h2>

**Clone este repositório**:

`git clone https://github.com/csjhonathan/boardland-back.git`

**Entre na pasta criada**:

`cd boardland-back`

**Instale as dependências**:

`npm install` ou `npm i`

**Configure as variáveis de ambiente**:

Crie um arquivo `.env` na raiz do projeto, como mostra o arquivo `.env.example`.

***Inicie o servidor***:

`npm start` ou `npm run dev` para contar com o hot-reaload.

Caso você receba uma mensagem dizendo que a conexão com o banco foi bem sucedida e que o servidor está rodando em http://localhost:5000(ou na porta que você especificar), é porque a api está pronta para ser utilizada.