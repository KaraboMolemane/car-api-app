import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Car from './components/Car';
import { useEffect, useState } from 'react';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cars, setCars] = useState([]);

  useEffect(() => {

      //Do the API call
      fetch('/api')
        .then(res => res.json())
        .then(
          (result) => {
          //   console.log(result)
          setIsLoaded(true);
          setCars(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            // console.log(error)
          }
        )
  

  },)

  if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
      <>
        <Header />
        <Car cars={cars}/>
      </>
    );}
  }

export default App;
