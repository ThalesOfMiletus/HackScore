import { createAvaliacao, getAllAvaliacoes, getAvaliacoesByEquipe, getAvaliacoesByAvaliador, Avaliacao } from '../models/avaliacaoModel';

const registerAvaliacao = async (avaliador_id: number, equipe_id: number, notas: object): Promise<Avaliacao> => {
  return await createAvaliacao(avaliador_id, equipe_id, notas);
};

const listAvaliacoes = async (): Promise<Avaliacao[]> => {
  return await getAllAvaliacoes();
};

const listAvaliacoesByEquipe = async (equipe_id: number): Promise<Avaliacao[]> => {
  return await getAvaliacoesByEquipe(equipe_id);
};

const listAvaliacoesByAvaliador = async (avaliador_id: number): Promise<Avaliacao[]> => {
  return await getAvaliacoesByAvaliador(avaliador_id);
};

export { registerAvaliacao, listAvaliacoes, listAvaliacoesByEquipe, listAvaliacoesByAvaliador };
