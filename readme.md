# Boardland-Back

O Boardland-Back é o backend de uma plataforma de e-commerce dedicada à venda de jogos de tabuleiro. Ele oferece uma variedade de recursos para gerenciar o fluxo de cadastro, login, carrinho, histórico e compra de jogos. O projeto foi construído usando Node.js, Express, MongoDB e outras tecnologias para fornecer uma experiência segura e eficiente aos usuários.

<h2>Documentação</h2>

Nós temos uma página especial apenas para disponibilizar a documentação da nossa aplicação, onde descrevemos todos os endpoints disponíveis e e como fazer as requisições. <a href="https://boardland-api.onrender.com/api-docs">Clique aqui</a> para ter acesso a documentação da nossa api.

<h2>Tecnologias e Recursos</h2>

***Cadastro de Usuário (bcrypt)***:

bcrypt é uma biblioteca utilizada para realizar a criptografia segura das senhas dos usuários. Ela ajuda a proteger as senhas armazenadas no banco de dados, tornando-as praticamente impossíveis de serem descriptografadas por invasores, mesmo se o banco de dados for comprometido.


***Login de Usuário (JWT - JSON Web Token)***:

JWT (JSON Web Token) é um método de autenticação que gera tokens criptografados para autenticar usuários. Esses tokens podem ser usados para autorizar o acesso a recursos protegidos no servidor. É uma forma segura e eficiente de gerenciar a autenticação.


***Carrinho de Compras***:

Essa funcionalidade permite aos usuários adicionar, remover e finalizar compras em um site ou aplicativo. O carrinho de compras é usado para manter o controle dos itens selecionados pelos usuários antes de efetivar a compra.


***Histórico de Compras***:

O histórico de compras é um registro que armazena informações sobre todas as compras anteriores de um usuário. Isso permite que os usuários acompanhem suas compras passadas e os administradores do sistema analisem o comportamento de compra dos clientes.

***Envio de Confirmações (Nodemailer)***:

Nodemailer é uma biblioteca que facilita o envio de e-mails a partir de um aplicativo Node.js. Nesse contexto, é usado para enviar confirmações de compras por e-mail aos usuários após a conclusão de uma compra, fornecendo informações sobre a transação.


***Validação de Dados (Joi)***:

Joi é uma biblioteca de validação de dados que ajuda a garantir que os dados de entrada fornecidos pelos usuários estejam formatados corretamente e atendam aos critérios especificados. Isso ajuda a evitar erros e ataques de injeção de dados.


***Gestão de Datas (Day.js)***:

Day.js é uma biblioteca leve para manipulação de datas em JavaScript. Ela simplifica a formatação, análise e manipulação de datas, tornando a gestão de datas mais eficiente e menos suscetível a erros.


***Comunicação com Frontend (CORS)***:

CORS (Cross-Origin Resource Sharing) é uma configuração de segurança que permite que os servidores definam quem pode acessar seus recursos (como APIs) em um domínio diferente. Isso é essencial para permitir uma comunicação segura entre o frontend e o backend de um aplicativo.


***MongoDB***:

MongoDB é um banco de dados não relacional (NoSQL) amplamente usado para persistência de dados. Ele é escalável e flexível, adequado para armazenar dados estruturados e semi-estruturados, o que o torna uma escolha popular para aplicativos modernos.

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

Caso você receba uma mensagem dizendo que a conexão com o banco foi bem sucedida e que o servidor está rodando em http://localhost:5000 (ou na porta que você especificar), é porque a api está pronta para ser utilizada.