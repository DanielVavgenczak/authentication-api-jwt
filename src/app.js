import express from "express";
import './database/index';
import router from "./routes/index";
import AppErro from './app/errors/AppErro';

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
    this.validateErrors();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/api", router);
  }

  runServer(port, message) {
    return this.server.listen(port, console.log(`${message}:${port} :)`));
  }

  validateErrors(){
    this.server.use((error, request, response, next)=>{
      if(error instanceof AppErro){
          return response.status(error.statusCode).json({status: 'error', message: error.message})
      }else if(error instanceof Error){
        return response.json({status: 'error', message: error.message})
      }

      return response.status(500).json({status: 'error', message: 'Internal server error'})
    })
  }
}

export default new App();
