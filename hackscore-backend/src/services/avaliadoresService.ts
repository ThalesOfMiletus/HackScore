import { createAvaliador, getAllAvaliadores, deleteAvaliador, Avaliador } from '../models/avaliadorModel';
import bcrypt from 'bcrypt';

const registerAvaliador = async (nome: string, login: string, senha: string): Promise<Avaliador> => {
  const hashedPassword = await bcrypt.hash(senha, 10);
  return await createAvaliador(nome, login, hashedPassword);
};

const listAvaliadores = async (): Promise<Avaliador[]> => {
  return await getAllAvaliadores();
};

const removeAvaliador = async (id: number): Promise<void> => {
  return await deleteAvaliador(id);
};

export { registerAvaliador, listAvaliadores, removeAvaliador };
