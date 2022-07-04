<div align="center">

  <h3>📓</h3>

  # **To do REST API**
  
</div>

<div>
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/JeanMenezees/todo.api?style=for-the-badge">  <img alt="GitHub forks" src="https://img.shields.io/github/forks/JeanMenezees/todo.api?style=for-the-badge">
</div>

<br>

<div align="center">

Api REST **mvc** em [NestJS](https://nestjs.com/) para a fazeres

</div>

## Tecnologias

- Typescript
- NestJS
- Prettier
- TypeORM
- SQL
- Postman
- Docker

## Instalacao

Para instalar todas as dependencias do projeto, execute o comando:

```
$ npm install
```

## Iniciando API

Para iniciar sua api execute o seguinte comando:

```
$ npm run start
```

## Iniciando com Docker!

#### Dependencia do [Docker](https://www.docker.com/) instalado

Crie uma imagem com

```
$ docker compose
```

E suba a imagem com 

```
$ docker compose up nest-project
```

Logo depois a aplicação estará rodando em seu **localhost:3000**

## Features

- CRUD de to do's para um usário e para um adminstrador
- Autenticação e autorização de endpoints com jwt [veja mais](https://docs.nestjs.com/security/authentication)
- Uso do typeORM como relational object da aplicação
- Uso do sqlite para migrar e obter os dados

## Cadastrar usuario **POST** ```localhost:3000/users/register```

#### Body 

```
{
    "nome": "New user",
    "email": "newuser@gmail.com",
    "senha": "123"
}
```

#### Response

```
{
  "nome": "New user",
  "email": "newuser@gmail.com,
  "senha": "123",
  "id": 1
}
```

## Autenticar usuario **POST** ```localhost:3000/users/auth/login```

#### Body 

```
{
    "username": "New user",
    "password": "123"
}
```

#### Response

```
{
  "access_token": ...
}
```

## Obter todos os todo's **GET** ```localhost:3000/todo```

#### Response

```
{
  [...]
}
```

## Cadastrar todo **POST** ```localhost:3000/todo```

#### Body 

```
  {
    "titulo": "Limpar a casa",
    "descricao": "limpar a casa"
  }
```

#### Response

```
{
  "titulo": "Limpar a casa",
  "descricao": "limpar a casa",
  "usuario": 1,
  "id": 1,
  "completa": false,
  "createdAt": "2022-07-01T21:27:24.000Z",
  "updatedAt": "2022-07-01T21:27:24.000Z"
}
```

## Atualizar todo **PUT** ```localhost:3000/todo/id/{id}```

#### Param

```id:number```

#### Body

```
{
  "titulo": "Limpar quarto",
  "descricao": "limpar quarto"
}
```

#### Response

```
{
  "generatedMaps": [],
  "raw": [],
  "affected": 1
}
```

## Deletar todo **DELETE** ```localhost:3000/todo/id/{id}```

#### Param 

```id:number```

#### Response

```
{
  "raw": [],
  "affected": 1
}
```

## Por que usar o NestJS?

O NestJs atende um desenvolvimento rápido e com dev hacks muito ágeis através do seu [CLI](https://docs.nestjs.com/cli/overview) e toda sua estrutura. Além disso, sua flexibilidade que possibilita o uso do [express](https://expressjs.com/pt-br/) e a integração com vários bancos de dados de maneira rápida e eficaz é uma vantagem. Por fim algumas configurações padrões como a ```npm run start:dev``` já tira a preocupação da instalação do [nodemon](https://www.npmjs.com/package/nodemon)

### Nest TypeORM

Possibilita realizar queries poderosas para os bancos de dados

![query_example](img/nest_query_example-1.png)

### NestJS auth

Com recursos de jwt e [strategies](https://docs.nestjs.com/microservices/custom-transport#creating-a-strategy) do Nest, é possível realizar a autenticação de maneira segura e eficaz [veja mais](https://docs.nestjs.com/security/authentication)

### Nest CLI

Sua CLI agiliza e torna sua arquitetura e desenvolvimento flexível e dinâmico, neste caso foi usada a mvc.
