import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const port = 8080;
const mockAPI: express.Application = express();
const corsOptions = {
    origin: true,
    exposedHeaders: ['Access-Control-Allow-Origin'],
    methods: ['get', 'post',],
    optionsSuccess: 200
};

mockAPI.use(bodyParser.json());

mockAPI.options('*', cors());

mockAPI.get('/api/member/:memberId', cors(corsOptions), (req, res) => {
    console.log(`/api/member/${req.params.memberId}`, req.body, '\n');
    const responsePath = `${__dirname}/json/mockMember.json`;
    const response = fs.createReadStream(responsePath);
    response.pipe(res);
});

mockAPI.get('/api/member/:memberId/membership', cors(corsOptions), (req, res) => {
    console.log(`/api/member/${req.params.memberId}/membership`, req.body, '\n');
    const responsePath = `${__dirname}/json/mockMembership.json`;
    const response = fs.createReadStream(responsePath);
    response.pipe(res);
});

mockAPI.get('/api/member/:memberId/orders', cors(corsOptions), (req, res) => {
    console.log(`/api/member/${req.params.memberId}/orders`, req.body, '\n');
    const responsePath = `${__dirname}/json/mockOrders.json`;
    const response = fs.createReadStream(responsePath);
    response.pipe(res);
});

mockAPI.listen(port, () => {
    console.log(`Mock API server started on port: ${port}`);
});
