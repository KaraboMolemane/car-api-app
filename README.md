## Testing the app on Postman
- Download and install Postman from [here](https://www.postman.com/downloads/).
- Open the project and in your command line interface, navigate to this folder and type `npm install`.
- Run the people_server.js file by typing `npm start`. The project will automatically reload everytime changes are made. 
- Navigates to http://localhost:8080/api to see the current list of cars
- Test the Restful API created in app.js with Postman:
  - To add an additional car, make an HTTP Post request with the query string passing all the relevant parametres (e.g http://localhost:8080/?id=8&model=Tiguan&seats=5)
  - To delete a car, make HTTP Delete request that deletes an item with a specific id from the list (http://localhost:8080/car/3)
  - To update a car's model or number of seats, make an HTTP Put request with the car's model or number of seats (http://localhost:8080/?id=8&model=Tigua&seats=7). Please note that the id is required, whilst the model and number of seats is optional (http://localhost:8080/update/?id=4&model=Polo). 