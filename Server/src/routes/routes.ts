import {Router} from 'express';

class Routes {
    public indexRouter :Router =  Router();

    constructor(){
        this.config();
    }

    config():void{
        this.indexRouter.get('/', (req,res)=>{
            
            res.send('hello') ;   
            console.log('index principal')
        });

        /*this.indexRouter.get('/api/games', (req,res)=>{
            
            res.send('hello games') ;   
            console.log('routes games')
        });*/
       // this.indexRouter.get('/api/personas', personasController.personas);
    }
}

const routes = new Routes();
export default routes.indexRouter;