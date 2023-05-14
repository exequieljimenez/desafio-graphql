import express from 'express';
import { options } from './config/config.js';
import { graphqlController } from './controllers/products.graphql.controller.js';

const app = express();
const port = options.server.port;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.use('/api/graphql', graphqlController());