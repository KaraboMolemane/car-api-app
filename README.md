## To use this app with a browser, do the following:
- Clone the repo to you local machine
- Open the project and in your command line interface, navigate to this folder and type `npm install`.
- Run the backend typing `npm start`. The project will automatically reload everytime changes are made. 
- Open a new terminal and navigate to the frontend by typing `cd frontend`. 
- Install the dev dependecies for the frontend application by typing `npm install`.
-  Run the frontend by typing `npm start`. The project will automatically open the application on http://localhost:3000/ and it will reload everytime changes are made. 
- Navigates to http://localhost:8080/api to see the current list of cars


## To use this app with a Postman, do the following:
- Clone the repo to you local machine
- Open the project and in your command line interface, navigate to this folder and type `npm install`.
- Run the backend typing `npm start`. The project will automatically reload everytime changes are made.
- To add an additional car, make an HTTP Post request with the query string passing all the relevant parametres (e.g http://localhost:8080/?id=8&model=Tiguan&seats=5). Parametres can also be sent using the body. 
- To delete a car, make HTTP Delete request that deletes an item with a specific id from the list (http://localhost:8080/car/3)
- To update a car's model or number of seats, make an HTTP Put request with the car's model or number of seats (http://localhost:8080/?id=8&model=Tigua&seats=7). Please note that the id is required, whilst the model and number of seats is optional (http://localhost:8080/update/?id=4&model=Polo). Parametres can also be sent using the body. 