import { Request, Response } from 'express';
import { registerEquipe, listEquipes, removeEquipe } from '../services/equipesService';
import Joi from 'joi';

const validateEquipe = (data: any) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
  });
  return schema.validate(data);
};

const createEquipeController = async (req: Request, res: Response) => {
  const { error } = validateEquipe(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { nome } = req.body;
  try {
    const equipe = await registerEquipe(nome);
    res.json(equipe);
  } catch (err) {
    res.status(500).send('Erro ao cadastrar equipe');
  }
};

const getAllEquipesController = async (req: Request, res: Response) => {
  try {
    const equipes = await listEquipes();
    res.json(equipes);
  } catch (err) {
    res.status(500).send('Erro ao buscar equipes');
  }
};

const deleteEquipeController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeEquipe(Number(id));
    res.send('Equipe excluída com sucesso');
  } catch (err) {
    res.status(500).send('Erro ao excluir equipe');
  }
};

export { createEquipeController, getAllEquipesController, deleteEquipeController };
