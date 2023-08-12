import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Car from './components/Car';
import { useEffect } from 'react';

function App() {

  let cars = [{
    "id": 1, 
    "make": "Mercedes-Benz", 
    "model": "A-class", 
    "seats": 5,
    "imgUrl": "https://img-ik.cars.co.za/news-site-za/images/2022/06/a45-dyn.jpg?tr=h-347%2Cw-617"
  }, 
  {
      "id": 2, 
      "make":"Land Rover", 
      "model": "Defender 90", 
      "seats": 6,
      "imgUrl": "https://img-ik.cars.co.za/news-site-za/images/2022/05/LandRover-Defender90-12.jpg?tr=w-1200,h-800"
  }, 
  {
      "id": 3, 
      "make":"Toyota", 
      "model": "Hilux", 
      "seats": 2,
      "imgUrl": "https://media.cdntoyota.co.za/toyotacms/attachments/ckgs56wex00fk0qmott52zy29-0101020113-single-cab-exterior-3.desktop.jpg"
  }]

  useEffect(() => {

      //Do the API call
      fetch('/api')
        .then(res => console.log(res))
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            //setIsLoaded(true);
           // setItems(result);
          },
          (error) => {
            //setIsLoaded(true);
            //setError(error);
            console.log(error)
          }
        )
  

  },)

  return (
    <>
      <Header />
      <Car cars={cars}/>
    </>
  );
}

export default App;
