const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require("helmet");


const app = express();
app.use(helmet()); // Use Helmet!
const CARS_JSON = './public/cars.json';


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// When the user navigates to ‘http://localhost:8080/api’ an array of car items should be returned.
app.get('/api', function (req, res) {
    fs.readFile(CARS_JSON, (err, data) => {
        if (err) console.log('error reading file:', err);
        res.send(JSON.parse(data));
    })
})

app.get("/helmet", (req, res) => {
    res.send("Hello world! Our app is now wearing a Helmet for security reasons.");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// The user should be able to use Postman to make an HTTP Post request that adds an additional item to the list of cars.
app.post('/', (req, resp) => {
    const CAR = {
        id: parseInt(req.body.id),
        make: req.body.make,
        model: req.body.model,
        seats: parseInt(req.body.seats),
        imgUrl: (req.body.imgUrl.length > 1) ? req.body.imgUrl : 'https://picsum.photos/250/200?random=' + req.body.id
    }
    const CARS = getCars()
    const index = CARS.findIndex(object => {
        return object.id === CAR.id;
    });

    if (index > -1) {
        resp.send('Car already exists')
    } else {
        addCar(CAR)
        resp.send('Success')
    }
})

// utility function - gets car data, and creates the file if it doesn't exist
function getCars() {
    try {
        const CONTENT = fs.readFileSync(CARS_JSON)
        return JSON.parse(CONTENT);
    } catch (e) { // file non-existent
        fs.writeFileSync(CARS_JSON, '[]');
        return [];
    }
}

function addCar(car) {
    const CARS = getCars();
    CARS.push(car)
    fs.writeFileSync(CARS_JSON, JSON.stringify(CARS))
}

// The user should be able to use Postman to make an HTTP Delete request that deletes an item with a specific id from the list.
app.delete('/car/:id', (req, resp) => {
    const ID = parseInt(req.params.id)
    const CARS = getCars();
    if (CARS.map(e => e.id).indexOf(ID) > -1) {
        deleteCar(ID)
        resp.send('Success')
    } else {
        resp.send('Car does not exist')
    }
})

function deleteCar(id) {
    const CARS = getCars();
    const i = CARS.map(e => e.id).indexOf(id);
    CARS.splice(i, 1);
    fs.writeFileSync(CARS_JSON, JSON.stringify(CARS))
}

// The user should be able to make an HTTP Put request to update the model or number of seats of a car.
app.put('/update', (req, resp) => {
    const CAR = {
        id: parseInt(req.body.id),
        make: req.body.make,
        model: req.body.model,
        seats: parseInt(req.body.seats),
        imgUrl: req.body.imgUrl
    }
    const CARS = getCars()
    if (CARS.map(e => e.id).indexOf(CAR.id) > -1) {
        updateCar(CAR)
        resp.send('Success')
    } else {
        resp.send('Car does not exist')
    }
})

function updateCar(car) {
    const CARS = getCars();
    const i = CARS.map(e => e.id).indexOf(car.id);
    if (CARS[i].make !== car.make) CARS[i].make = car.make;
    if (CARS[i].model !== car.model) CARS[i].model = car.model;
    if (CARS[i].seats !== car.seats) CARS[i].seats = car.seats;
    if (CARS[i].imgUrl !== car.imgUrl) CARS[i].imgUrl = car.imgUrl;
    fs.writeFileSync(CARS_JSON, JSON.stringify(CARS))
}


app.use(express.static('public'));