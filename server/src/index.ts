import Express from 'express';
import { addWeird } from '@test/client';

const app = Express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html').send(`
        <h1>HALO</h1>
        <p>Add: ${addWeird(2, 3)}</p>
    `);
});

app.listen(5000, () => {
    console.log('listening on 5000');
});