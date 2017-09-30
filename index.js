const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./bin_controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

app.use(express.static(__dirname + './build'));

app.get('/api/shelf/:id', controller.getShelf);
app.get('/api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.updateBin);
app.post('/api/bin/:id', controller.createBin);
app.delete('/api/bin/:id', controller.removeBin);


const port = 3005;
app.listen(port, () => console.log('listening on port', port));
