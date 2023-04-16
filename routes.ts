import { Router } from 'express';

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
  res.send({message:'Hello World From the Typescript Server!'});
});