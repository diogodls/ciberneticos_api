import {insertCar, getCars, updateCar, deleteCar} from './controllers/CarsController.js';
import express from 'express';

const app = express();
const port = 3009;
app.listen(port)
app.use(express.json());

app.get('/', async (req, res) => {
    res.json(await getCars(res));
})

app.post('/car', (req, res) => {
    insertCar(req.body.car);
    res.json('Carro criado');
});

app.patch('/car', (req, res) => {
    updateCar(req.body.car);
    res.json('Carro editado.')
})

app.delete('/car/:id', (req, res) => {
    console.log(req.params.id);
    deleteCar(req.params.id);
    res.json('ue')
})