import {Request, Response} from 'express';

import db from '../database';
class PersonaController {
    public getAll (req: Request, res: Response){
        res.json("personas")
        
        //res.send('Hello controller');
    }

    public update (req: Request, res: Response){

        res.json({ text: 'update persona' + req.params.id}, );
    }

    public create (req: Request, res: Response){

        res.json({ text: 'create persona'});
    }

    public delete (req: Request, res: Response){

        res.json({ text: 'delete persona' + req.params.id});
    }



}

const personaController = new PersonaController();
export default personaController;