import espress , {Application, urlencoded} from 'express';
import routes from './routes/routes';
import personaRoutes from './routes/personasRoutes';
import morgan from 'morgan';
import cors from 'cors';
class Server {

   public app: Application;

   constructor(){
       this.app = espress();
       this.config();
       this.routes();
   }

   config ():void{
    this.app.set('port', process.env.PORT || 3000);
   }

   routes ():void{
    this.app.use(routes);
    this.app.use(personaRoutes);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(espress.json());
    this.app.use(espress.urlencoded({'extended':false})); 
   }
   start():void{
       this.app.listen(this.app.get('port'), () => {
           console.log('Server on port', this.app.get('port'));
       });
   }

}

const server = new Server();
server.start();