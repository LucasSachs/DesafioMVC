
# Desafio técnico MVC

Esse projeto foi desenvolvido e documentado por: **Lucas Sachs**

Informações de contato:

- Email: lucassachs1@gmail.com
- Telefone: (42) 99994-8125
- Linkedin: https://www.linkedin.com/in/lucas-sachs-215b87261/

Este projeto é um teste técnico de um CRUD para uma vaga de Analista de Desenvolvimento Full-Stack, feito exclusivamente para a empresa Santa Casa Ponta Grossa.

## Stack utilizada

**Front-end:** Next.js, React, TailwindCSS, Typescript

**Back-end:** Nest.js, Typescript

**Database:** SQLite

**Package Manager:** PNPM

Obs: Caso você ainda não tenha o PNPM na sua máquina, você pode instalar a CLI dele usando o seguinte comando:

```bash
    npm i -g pnpm
```

## Configuração APP

Obs: Certifique-se de que seu terminal está apontando para a pasta app. Caso não estiver, você pode fazer isso usando o comando:

```bash
    cd app
```

Considerando o uso do PNPM como Package Manager, você pode fazer a instalação dos pacotes usando o seguinte comando:

```bash
    pnpm install
```

Faça uma cópia do arquivo .env-example que está dentro do projeto, e renomeie essa cópia para .env(Como estamos rodando localmente, não há necessidade de fazer nenhuma alteração dentro da env, o sistema funcionará normalmente).

Após fazer a instalação dos pacotes necessários para a execução do sistema, você pode buildar o projeto usando o comando:

```bash
    pnpm build
```

E por fim, executar o sistema em sua build de produção usando o comando:

```bash
    pnpm start
```

Lembre-se que caso tenha sido feita alguma alteração dentro da .env, para que sistema execute da forma que foi esperada, você deve também fazer a instalação da API e executá-la tendo mesmo HOST e PORTA que foi preenchida nas variáveis de ambiente.

Com isso, você já tem o front-end rodando em sua máquina, e você pode acessá-lo através do link: http://localhost:3000

## Configuração API

Obs: Certifique-se de que seu terminal está apontando para a pasta api. Caso não estiver, você pode fazer isso usando o comando:

```bash
    cd api
```

Considerando o uso do PNPM como Package Manager, você pode fazer a instalação dos pacotes usando o seguinte comando:

```bash
    pnpm install
```

Como estamos rodando localmente usando um banco SQLite, a API já está pré configurada, ou seja, não há a necessidade de criarmos uma .env.

Após fazer a instalação dos pacotes necessários para a execução do sistema, você pode buildar o projeto usando o comando:

```bash
    pnpm build
```

E por fim, executar o sistema em sua build de produção usando o comando:

```bash
    pnpm start:prod
```

Com isso, você já tem o back-end rodando em sua máquina, e você pode acessá-lo através do link: http://localhost:8000

## Documentação API

Aqui você pode encontrar a documentação de todos os endpoints da API.

| Método | Endpoint | Descrição                     |
|--------|----------|-------------------------------|
| GET    | /tarefa  | Retorna todas as tarefas      |
| POST   | /tarefa  | Cria uma nova tarefa          |
| PUT    | /tarefa  | Atualiza uma tarefa existente |
| DELETE | /tarefa  | Remove uma tarefa existente   |

