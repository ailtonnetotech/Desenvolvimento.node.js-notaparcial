# My API Project

Esta é uma API de gerenciamento de tarefas construída com Node.js, Express, Sequelize, dotenv e MySQL.

## Configuração

1. Clone o repositório.
2. Criei um arquivo `.env` com as seguintes variáveis de ambiente:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=my_database
    DB_DIALECT=mysql
    ```
3. Instalei as dependências:
    ```bash
    npm install
    ```
4. Executei as migrações:
    ```bash
    npx sequelize-cli db:migrate
    ```
5. Inicie o servidor:
    ```bash
    npm start
    ```

## Endpoints

- `GET /api/tasks` - Retorna todas as tarefas
- `POST /api/tasks` - Cria uma nova tarefa
- `GET /api/tasks/:id` - Retorna uma tarefa pelo ID
- `PUT /api/tasks/:id` - Atualiza uma tarefa pelo ID
- `DELETE /api/tasks/:id` - Exclui uma tarefa pelo ID
