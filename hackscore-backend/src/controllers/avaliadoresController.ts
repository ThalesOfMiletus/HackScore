import { Request, Response } from 'express';
import { registerAvaliador, listAvaliadores, removeAvaliador } from '../services/avaliadoresService';
import Joi from 'joi';

const validateAvaliador = (data: any) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    login: Joi.string().required(),
    senha: Joi.string().required(),
  });
  return schema.validate(data);
};

const createAvaliadorController = async (req: Request, res: Response) => {
  const { error } = validateAvaliador(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { nome, login, senha } = req.body;
  try {
    const avaliador = await registerAvaliador(nome, login, senha);
    res.json(avaliador);
  } catch (err) {
    res.status(500).send('Erro ao cadastrar avaliador');
  }
};

const getAllAvaliadoresController = async (req: Request, res: Response) => {
  try {
    const avaliadores = await listAvaliadores();
    res.json(avaliadores);
  } catch (err) {
    res.status(500).send('Erro ao buscar avaliadores');
  }
};

const deleteAvaliadorController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeAvaliador(Number(id));
    res.send('Avaliador excluído com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao excluir avaliador');
  }
};

export { createAvaliadorController, getAllAvaliadoresController, deleteAvaliadorController };
