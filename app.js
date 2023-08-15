const express = require('express');
const app = express();
const fs = require('fs');

// When the user navigates to ‘http://localhost:8080/api’ an array of car items should be returned.
app.get('/api', function (req, res) {
    fs.readFile('./public/cars.json', (err, data) => {
        if (err) console.log('error reading file:', err);
        res.send(JSON.parse(data));  
    })
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// The user should be able to use Postman to make an HTTP Post request that adds an additional item to the list of cars.
app.post('/', (req, resp)=>{
    const car = {
        id: req.query.id,
        make: req.query.make,
        model: req.query.model,
        seats: req.query.seats
    }
    console.log('Car:', car);
    const cars = getCars()
    if (cars.map(e => e.id).indexOf(car.id) > -1){
        resp.send('Car already exists')
    }else{
        addCar(car)
        resp.send('Success')
    }
})

// utility function - gets car data, and creates the file if it doesn't exist
function getCars(){
    try {
        const content = fs.readFileSync('./public/cars.json')
        return JSON.parse(content);
    }catch(e){ // file non-existent
        fs.writeFileSync('./public/cars.json', '[]');
        return [];
    }
}

function addCar(car){
    const cars = getCars();
    cars.push(car)
    fs.writeFileSync('./public/cars.json', JSON.stringify(cars))
}

// The user should be able to use Postman to make an HTTP Delete request that deletes an item with a specific id from the list.
app.delete('/car/:id', (req, resp) => {
    const id = req.params.id
    const cars = getCars();
    if (cars.map(e => e.id).indexOf(id) > -1){
        deleteCar(id)
        resp.send('Success')
    }else{
        resp.send('Car does not exist')
    }
})

function deleteCar(id){
    const cars = getCars();
    const i = cars.map(e => e.id).indexOf(id);
    cars.splice(i, 1);
    fs.writeFileSync('./public/cars.json', JSON.stringify(cars))
}

// The user should be able to make an HTTP Put request to update the model or number of seats of a car.
app.put('/update', (req, resp) => {
    const car = {
        id: req.query.id,
        model: req.query.model,
        seats: req.query.seats
    }
    const cars = getCars()
    if (cars.map(e => e.id).indexOf(car.id) > -1){
        updateCar(car)
        resp.send('Success')
    }else{
        resp.send('Car does not exist')
    }
})

function updateCar(car){
    const cars = getCars();
    const i = cars.map(e => e.id).indexOf(car.id);
    if(car.seats) cars[i].seats = car.seats;
    if(car.model) cars[i].model = car.model;
    fs.writeFileSync('./public/cars.json', JSON.stringify(cars))
}


app.use(express.static('public'));