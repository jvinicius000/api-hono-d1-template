
# API Basica usando Hono + CF Workers

Este repositório contém uma implementação simples de uma API utilizando o framework Hono em conjunto com Cloudflare Workers. O objetivo é demonstrar como configurar rapidamente uma API leve e eficiente, aproveitando a infraestrutura de edge da Cloudflare para garantir alta disponibilidade e baixa latência. Inclui exemplos práticos de rotas, manipulação de requisições e respostas, além de instruções sobre como implantar no Cloudflare Workers.

#### Recursos
- Configuração básica do Hono
- Exemplos de rotas RESTful
- Integração fácil com Cloudflare Workers
- Documentação para instalação e execução

## Estrutura do banco de dados D1

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da noticia que você quer |
| `title`      | `string` | **Obrigatório**. O titulo da noticia |
| `content`      | `number` | **Obrigatório**. O conteudo da noticia |
| `createdAt`      | `number` | **Obrigatório**. A data que a noticia foi publicada |

## Como usar?

Para rodar no modo dev:

```bash
~# npm run dev
```

Para realizar o deploy dentro do cloudflare workers:

```bash
~# npm run deploy
```

## Documentação da API

#### Retorna todos os itens

```http
  GET /api/v1/news
```

#### Retorna um item

```http
  GET /api/v1/news/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da noticia que você quer |


