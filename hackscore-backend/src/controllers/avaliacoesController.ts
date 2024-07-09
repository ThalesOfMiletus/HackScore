import { Request, Response } from 'express';
import { registerAvaliacao, listAvaliacoes, listAvaliacoesByEquipe, listAvaliacoesByAvaliador } from '../services/avaliacoesService';
import Joi from 'joi';

const validateAvaliacao = (data: any) => {
  const schema = Joi.object({
    avaliador_id: Joi.number().required(),
    equipe_id: Joi.number().required(),
    notas: Joi.object().required(),
  });
  return schema.validate(data);
};

const createAvaliacaoController = async (req: Request, res: Response) => {
  const { error } = validateAvaliacao(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { avaliador_id, equipe_id, notas } = req.body;
  try {
    const avaliacao = await registerAvaliacao(avaliador_id, equipe_id, notas);
    res.json(avaliacao);
  } catch (err) {
    res.status(500).send('Erro ao cadastrar avaliação');
  }
};

const getAllAvaliacoesController = async (req: Request, res: Response) => {
  try {
    const avaliacoes = await listAvaliacoes();
    res.json(avaliacoes);
  } catch (err) {
    res.status(500).send('Erro ao buscar avaliações');
  }
};

const getAvaliacoesByEquipeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const avaliacoes = await listAvaliacoesByEquipe(Number(id));
    res.json(avaliacoes);
  } catch (err) {
    res.status(500).send('Erro ao buscar avaliações da equipe');
  }
};

const getAvaliacoesByAvaliadorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const avaliacoes = await listAvaliacoesByAvaliador(Number(id));
    res.json(avaliacoes);
  } catch (err) {
    res.status(500).send('Erro ao buscar avaliações do avaliador');
  }
};

export { createAvaliacaoController, getAllAvaliacoesController, getAvaliacoesByEquipeController, getAvaliacoesByAvaliadorController };
