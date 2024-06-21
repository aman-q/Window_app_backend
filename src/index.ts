import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();


app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
