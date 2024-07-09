import pool from '../database/dbConfig';

interface Equipe {
  id: number;
  nome: string;
}

const createEquipe = async (nome: string): Promise<Equipe> => {
  const result = await pool.query(
    'INSERT INTO equipes (nome) VALUES ($1) RETURNING *',
    [nome]
  );
  return result.rows[0];
};

const getAllEquipes = async (): Promise<Equipe[]> => {
  const result = await pool.query('SELECT * FROM equipes');
  return result.rows;
};

const deleteEquipe = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM equipes WHERE id = $1', [id]);
};

export { createEquipe, getAllEquipes, deleteEquipe, Equipe };
