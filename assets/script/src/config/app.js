const express = require('express');
const cors = require('cors');

const personasRoutes = require('../routes/personas.routes');

//middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/personas', personasRoutes);



module.exports = app;