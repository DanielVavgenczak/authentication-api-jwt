import 'dotenv/config';
import 'express-async-errors';
import App from './app';

App.runServer(process.env.PORT || 4444, 'server running in port:')