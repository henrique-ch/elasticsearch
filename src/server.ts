import express from 'express';
import getClient from './client/elasticsearch';

const app = express();

app.get('/', (request: Request, response: Response) => {

    const client = getClient;
}) 

app.listen(3333, () => console.log(
    'Running'
));