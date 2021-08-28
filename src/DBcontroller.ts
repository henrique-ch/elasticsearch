import { Client } from 'pg';

class DBcontroller  {
    
    async create(request: Request, response: Response) {
        const client = new Client({
            host: '142.93.124.123',
            port: 5432,
            database: 'postgres',
            password: 'docker',
            user: 'postgres'
        });

        await client.connect();
    }   

}

export default DBcontroller;