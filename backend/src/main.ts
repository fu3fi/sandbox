import express from 'express';
import router from './presentation/api';

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
