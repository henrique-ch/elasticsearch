import express, { Request, Response } from 'express';
import getClient from './client/elasticsearch';
import DBController from './DBcontroller';
import PhotoController from './PhotoController';

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


app.get('/db/create', DBController.create);
app.get('/photos/create', PhotoController.create);
app.get('/photos/findAll', PhotoController.findAll);
app.get('/photos/findById/:id', PhotoController.findById);
app.get('/photos/createPhoto', PhotoController.createPhoto);

app.get('/photos/findByQuery', PhotoController.findByQuery);

app.listen(3333, () => console.log(
    'Running'
));