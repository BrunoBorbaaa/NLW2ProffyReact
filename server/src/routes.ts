import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsControllers';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.get('/connections', connectionsController.index);

routes.post('/connections', connectionsController.create)
export default routes;
