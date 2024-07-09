import { createEquipe, getAllEquipes, deleteEquipe, Equipe } from '../models/equipeModel';

const registerEquipe = async (nome: string): Promise<Equipe> => {
  return await createEquipe(nome);
};

const listEquipes = async (): Promise<Equipe[]> => {
  return await getAllEquipes();
};

const removeEquipe = async (id: number): Promise<void> => {
  return await deleteEquipe(id);
};

export { registerEquipe, listEquipes, removeEquipe };
