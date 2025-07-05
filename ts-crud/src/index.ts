import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use('/api', router);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});