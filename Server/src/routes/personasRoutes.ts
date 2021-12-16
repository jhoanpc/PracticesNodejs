import {Router} from 'express';
import personaController from '../controllers/PersonaController';

import personasController  from '../controllers/PersonaController';
class PersonasRoutes {
    public personaRouter :Router =  Router();

    constructor(){
        this.config();
    }

    config():void{
       
        this.personaRouter.get('/api/personas', personasController.getAll);
        this.personaRouter.post('/', personaController.create);
        this.personaRouter.put('/:id', personaController.update);
        this.personaRouter.delete('/:id', personaController.delete);

    }
}

const routes = new PersonasRoutes();
export default routes.personaRouter;