import express from 'express';
import routes from './routes';
import cors from 'cors';

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: atualizar uma informação existente
//DELETE: deletar uma informação existente

//Corpo da Requisição(Request Body): Dados para a criação ou edito um usuario
//Route Params: Identificar qual recurso eu quero atualizar ou deletar ./users:id
//Query Params: Paginação, Filtros, ordenação

// Casos de uso Pelo Layout
const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
