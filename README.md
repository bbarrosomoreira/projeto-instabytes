<h4> 
    🟢  Projeto concluído  🟢
</h4>

## Instabytes: Seu mural de fotos com descrições geradas por IA

### Introdução
O Instabytes é um projeto desenvolvido durante a imersão Dev Back-End da Alura em parceria com Google Gemini, com o objetivo de criar uma plataforma simples para compartilhar fotos e gerar descrições personalizadas utilizando a inteligência artificial. O projeto demonstra a integração de diversas tecnologias, como Node.js, MongoDB e o modelo de linguagem Gemini da Google.

### Tecnologias Utilizadas
* **Node.js:** Ambiente de execução JavaScript para o lado do servidor.
* **Express:** Framework web para criar a API RESTful do projeto.
* **MongoDB:** Banco de dados NoSQL para armazenar os posts e as informações das imagens.
* **Multer:** Middleware para lidar com o upload de arquivos (imagens).
* **@google/generative-ai:** Biblioteca para interagir com o modelo de linguagem Gemini e gerar descrições detalhadas das imagens.
* **dotenv:** Para gerenciar as variáveis de ambiente de forma segura.
* **cors:** Para permitir requisições de diferentes origens (CORS).

### Arquitetura
O projeto segue uma arquitetura típica de aplicação web, com um frontend (não implementado neste projeto - veja projeto-instabytes-front) que se comunica com o backend através de uma API RESTful. O backend é responsável por:
* Receber e armazenar os posts no banco de dados MongoDB.
* Gerar descrições para as imagens utilizando o modelo de linguagem Gemini.
* Servir os posts como resposta às requisições do frontend.

### Funcionalidades
* **Upload de imagens:** Permite aos usuários fazer upload de imagens para criar novos posts.
* **Geração automática de descrições:** Utiliza o modelo de linguagem Gemini para gerar descrições detalhadas e criativas para as imagens.
* **Armazenamento de posts:** Armazena os posts, incluindo a imagem, a descrição e outras informações relevantes, no banco de dados MongoDB.
* **API RESTful:** Expor uma API RESTful para permitir a interação com o backend através de requisições HTTP.
