require("dotenv").config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const propertyRouter = require('./routes/propertyRouter')
const app = express();
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(process.env.DB_CONNECTION_STRING as string);
mongoose.connection.on('error', (error: Error) => console.log(error));
mongoose.connection.once('open',() => {console.log("Connected to DB");});

app.use('/', propertyRouter);

app.listen(process.env.PORT, () => {
console.log('Server running on http://localhost:'+process.env.PORT+'/');
});