import express, { Router } from "express";
import path from 'path';

interface Options {
  port: number;
  routes:Router;
  public_path?: string;
}

export class Server {
  
  private app = express();
  private readonly port:number;
  private readonly publicPath: string;
  private readonly routes:Router;


  constructor(options:Options){
    const {port,routes, public_path='public'} = options;
    this.port=port;
    this.publicPath= public_path;
    this.routes=routes;
  }
  
  async start() {


//Middlewares

    this.app.use( express.json() );


    //PUBLIC FOLDER
    this.app.use(express.static(this.publicPath));




    //ROUTES
    this.app.use(this.routes);

    // *  span/
    this.app.get("*", (req, res) => {
      const indexPaht = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );
      res.sendFile(indexPaht);
    });

    // puerto donde se ejecuta
    this.app.listen(this.port, () => {
      console.log(`server running on por ${this.port}`);
    });
  }
}
