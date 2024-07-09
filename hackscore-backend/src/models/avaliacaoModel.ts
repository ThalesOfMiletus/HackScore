import pool from '../database/dbConfig';

interface Avaliacao {
  id: number;
  avaliador_id: number;
  equipe_id: number;
  notas: object;
}

const createAvaliacao = async (avaliador_id: number, equipe_id: number, notas: object): Promise<Avaliacao> => {
  const result = await pool.query(
    'INSERT INTO avaliacoes (avaliador_id, equipe_id, notas) VALUES ($1, $2, $3) RETURNING *',
    [avaliador_id, equipe_id, notas]
  );
  return result.rows[0];
};

const getAllAvaliacoes = async (): Promise<Avaliacao[]> => {
  const result = await pool.query('SELECT * FROM avaliacoes');
  return result.rows;
};

const getAvaliacoesByEquipe = async (equipe_id: number): Promise<Avaliacao[]> => {
  const result = await pool.query(
    'SELECT * FROM avaliacoes WHERE equipe_id = $1',
    [equipe_id]
  );
  return result.rows;
};

const getAvaliacoesByAvaliador = async (avaliador_id: number): Promise<Avaliacao[]> => {
  const result = await pool.query(
    'SELECT * FROM avaliacoes WHERE avaliador_id = $1',
    [avaliador_id]
  );
  return result.rows;
};

export { createAvaliacao, getAllAvaliacoes, getAvaliacoesByEquipe, getAvaliacoesByAvaliador, Avaliacao };
