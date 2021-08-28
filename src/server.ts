import express, {Request, Response} from 'express';
import getClient from './client/elasticsearch';

const app = express();

app.get('/', async (request: Request, response: Response) => {

    const client = getClient();

    const result = await client.index({
        index: 'elastic_teste',
        type: 'type_elastic_teste',
        body: {
            user: 'Henrique',
            password: '56156819',
            email: 'ch.henriquevinha@gmail.com'
        }
    });


    return response.json(result)
}) 

app.listen(3333, () => console.log(
    'Running'
));