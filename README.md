Este projeto consiste em um sistema de avaliação para hackathons, composto por um backend construído com Node.js e Express e um frontend construído com Next.js e TypeScript. O sistema permite o cadastro de avaliadores e equipes, bem como a atribuição de notas às equipes por parte dos avaliadores.

## Estrutura do Projeto

- **backend**: Contém os arquivos do backend, construído com Node.js, Express e PostgreSQL.
- **frontend**: Contém os arquivos do frontend, construído com Next.js, TypeScript e Tailwind CSS.
- **database**: Contém o script SQL para criar as tabelas no banco de dados.

## Requisitos

- Node.js
- npm
- PostgreSQL
  
## Funcionalidades
Backend
Rotas de Avaliadores:

GET /api/avaliadores: Obtém todos os avaliadores.
POST /api/avaliadores: Cria um novo avaliador.
DELETE /api/avaliadores/:id: Deleta um avaliador.
Rotas de Equipes:

GET /api/equipes: Obtém todas as equipes.
POST /api/equipes: Cria uma nova equipe.
DELETE /api/equipes/:id: Deleta uma equipe.
Rotas de Avaliações:

GET /api/avaliacoes: Obtém todas as avaliações.
POST /api/avaliacoes: Cria uma nova avaliação.
GET /api/avaliacoes/equipe/:id: Obtém avaliações por equipe.
GET /api/avaliacoes/avaliador/:id: Obtém avaliações por avaliador.

Foi usada a lib bcrypt para criptografia de senhas. Assim ao dar post na tabela avaliadores a senha cadastrada é criptografada.
