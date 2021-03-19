import express from 'express';
import routes from './routes/index.js';

const PORT = process.env.API_PORT || 9001;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});
