CREATE TABLE avaliadores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    login VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE equipes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    avaliador_id INT REFERENCES avaliadores(id) ON DELETE CASCADE,
    equipe_id INT REFERENCES equipes(id) ON DELETE CASCADE,
    notas JSONB NOT NULL
);