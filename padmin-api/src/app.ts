import express, {Request, Response} from 'express';
import routes from './routes/index';
import {CustomError, ErrorType} from './utils/errors';

const PORT = process.env.API_PORT ? parseInt(process.env.API_PORT) : 9001;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.use('/', routes);

app.use(function(error: any, request: any, response: any, next: any) {
  errorHandler(error, response);
});

function errorHandler(error: CustomError, response: Response) {
  switch (error.errorType) {
    case ErrorType.RecordNotFound:
      response.status(404).send(error.message)
      break;

    case ErrorType.InvalidId:
    case ErrorType.RequiredInformation:
      response.status(400).send(error.message)
      break;

    case ErrorType.RecordDuplicated:
      response.status(409).send(error.message)
      break;

    default:
      response.status(500).send(error.message)
      break;
  }
}

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});
