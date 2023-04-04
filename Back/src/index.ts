import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const propertyRouter = require('./routes/propertyRouter')
const app = express();
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect('mongodb+srv://admin:admin@clustera.krrhswg.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', (error: Error) => console.log(error));
mongoose.connection.once('open',() => {console.log("Connected to DB");});

app.use('/', propertyRouter);

app.listen(8080, () => {
console.log('Server running on http://localhost:8080/');
});