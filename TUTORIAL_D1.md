
# Tutorial de como configurar o banco de dados D1


Este documento fornece um guia passo a passo para configurar e utilizar o Banco de Dados SQL D1 no Cloudflare. O D1 é um banco de dados serverless, desenvolvido para funcionar de maneira eficiente junto com Cloudflare Workers, oferecendo suporte a SQL diretamente na borda, sem a necessidade de infraestrutura adicional.
## Passo a passo de configuração

#### Para acessar o Banco de Dados SQL D1 no painel do Cloudflare, siga os seguintes passos:
- Faça login no seu painel da Cloudflare.
- No menu lateral esquerdo, procure e clique na seção Workers e Pages.
- Dentro do menu expandido de Workers e Pages, localize e clique na opção Banco de Dados SQL D1.


![passo01](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/1.png)

###
- Clique no botão + Criar para iniciar o processo de criação de um novo banco de dados D1.

![passo02](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/2.png)

###
- Após clicar no botão + Criar na tela anterior, você será direcionado para a página de criação de banco de dados.
- No campo Nome, insira o nome desejado para o seu banco de dados (no exemplo, o nome utilizado é d1-example-jvinicius).
- Opcionalmente, você pode fornecer uma dica de localização clicando em Fornecer uma dica de localização (opcional), mas por padrão o banco de dados será criado na localização mais próxima.
- Após definir o nome, clique no botão azul Criar na parte inferior direita da janela.

![passo03](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/3.png)

###

- Clique no botão "Criar tabela" para iniciar o processo de criação da tabela citada no **README.MD**.

![passo04](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/4.png)

##

- Preencher os campos da tabela:
   - Nome da tabela: `news`.
   
- Adicionar colunas:
   - **Coluna 1:**  
     - Nome da coluna: `id`  
     - Tipo: `integer`  
     - Definir como chave primária clicando no botão "Definir a chave primária".
   
   - **Coluna 2:**  
     - Nome da coluna: `title`  
     - Tipo: `text`.
   
   - **Coluna 3:**  
     - Nome da coluna: `content`  
     - Tipo: `text`.
   
   - **Coluna 4:**  
     - Nome da coluna: `createdAt`  
     - Tipo: `text`.

- Finalizar a criação:
   - Clique no botão "Criar" para criar a tabela.


![passo05](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/5.png)


##
- Abrir o arquivo `wrangler.toml`:
   - No seu projeto, navegue até o diretório onde o arquivo `wrangler.toml` está localizado. 
   - Abra o arquivo usando seu editor de código (no exemplo, está sendo utilizado o Visual Studio Code).

- Adicionar a configuração do banco de dados D1:
   - Localize a seção referente às configurações do banco de dados D1.
   - Se a seção não estiver presente, adicione-a manualmente da seguinte forma:

- Definir as configurações do banco de dados:
   - Adicione a seguinte configuração no arquivo `wrangler.toml`:
   
   ```toml
   [[d1_databases]]
   binding = "DATABASE"
   database_name = "d1-example-server" # Nome do seu banco de dados D1
   database_id = "(ID DO SEU BANCO DE DADOS)" # Substitua pelo ID real do banco de dados D1
   ```

- Substituir os valores pelos seus dados:
   - No campo `database_name`, coloque o nome exato do seu banco de dados D1.
   - No campo `database_id`, insira o ID do banco de dados que você pode obter no painel do Cloudflare.

- Salvar o arquivo:
   - Após preencher os campos corretamente, salve o arquivo `wrangler.toml`.

- Deploy do Worker:
   - Após configurar o arquivo, você pode realizar o deploy do Worker, que agora estará vinculado ao banco de dados D1 conforme configurado.

![passo06](https://raw.githubusercontent.com/jvinicius000/api-hono-template/refs/heads/main/images/6.png)
