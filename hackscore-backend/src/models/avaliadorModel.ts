import pool from '../database/dbConfig';

interface Avaliador {
  id: number;
  nome: string;
  login: string;
  senha: string;
}

const createAvaliador = async (nome: string, login: string, senha: string): Promise<Avaliador> => {
  const result = await pool.query(
    'INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *',
    [nome, login, senha]
  );
  return result.rows[0];
};

const getAllAvaliadores = async (): Promise<Avaliador[]> => {
  const result = await pool.query('SELECT * FROM avaliadores');
  return result.rows;
};

const deleteAvaliador = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM avaliadores WHERE id = $1', [id]);
};

export { createAvaliador, getAllAvaliadores, deleteAvaliador, Avaliador };
