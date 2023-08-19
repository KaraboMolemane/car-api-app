import { useRef, useState } from "react";
import { useNavigate, useHistory, redirect } from 'react-router-dom';


function Car(props){

    const editMode = useRef('');
    // values for controlled inputs, two-way binding
    const [id, setId] = useState(0);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [seats, setSeats] = useState(0);
    const [imgUrl, setImgUrl] = useState(''); 

    // useNavigate redirect back to home page after adding, modifying or deleting a car 
    // const navigate = useNavigate(); // throws a runtime error 
    let cars = props.cars;
    const carItems = cars.map((car, index) =>
          <div className="col" key={index}>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-7">
                    <img height='250px' width='100%' src={car.imgUrl} alt={car.model+"_image"}></img>
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title">Car details</h5>
                    <p className="card-text">Id: <span>{car.id}</span></p>
                    <p className="card-text">Make: <span>{car.make}</span></p>
                    <p className="card-text">Model:<span>{car.model}</span></p>
                    <p className="card-text">Seats: <span>{car.seats}</span></p>
                    <div>
                      <div className="bd-example-snippet bd-code-snippet">
                          <div className="bd-example">        
                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdropLive" onClick={() => handleModifyCar({
                              id: car.id,
                              make: car.make,
                              model: car.model,
                              seats: car.seats,
                              imgUrl: car.imgUrl,
                            })}>
                              Modify
                            </button>
                            <button type="button" className="btn btn-danger" style={{marginLeft: '20px'}} onClick={() => handleCarDelete(car.id)}>
                              Delete
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>        
    )

    function handleCarSave(){      
      //add or save a modified car
      const car = {
        id: id,
        make: make,
        model:model,
        seats: seats,
        imgUrl: imgUrl,
      }

      if(editMode.current === 'new'){
        fetch('/', {
          method: 'POST', 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(car)
        }).then(() => {
          console.log('Car added/modified');
          // navigate('/'); 
          window.location.href = '/';
        })
      }
      else if(editMode.current === 'modify'){
        fetch('/update', {
          method: 'PUT', 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(car)
        }).then(() => {
          console.log('Car modified');
          // navigate('/'); 
          window.location.href = '/';
        })
      }

    }

    function handleCarDelete(carId){
      //Delete car
      console.log('/car/'+ carId);
      fetch('/car/'+ carId, {
        method: 'DELETE'
      }).then(() => {
        console.log('car deleted');
        // navigate('/'); 
        window.location.href = '/';

      })
    }

    function handleModifyCar(car){
      //Modify car
      // set editMode
      editMode.current = 'modify';
      // Do not allow user to edit the id in 'modify mode
      document.getElementById("id").setAttribute('disabled', ''); 
      // Set values on edit modal
      setId(car.id);
      setMake(car.make);
      setModel(car.model);
      setSeats(car.seats);
      setImgUrl(car.imgUrl);
    }

    function handleAddNewCar(){
      // set editMode and enable id input
      editMode.current = 'new';
      document.getElementById("id").removeAttribute('disabled');
    }

    return(
      <>
        <div>
          <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example" style={{marginTop: '20px'}}>
              <div className="row  row-cols-1 row-cols-md-2 g-4">
                  {carItems}
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive" style={{margin: '20px 0 0 50%'}} onClick={() => handleAddNewCar()}>
            Add a new car
        </button>

        <div className="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLiveLabel">Add/Edit a car</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <div>
                    <div className="bd-example-snippet bd-code-snippet">
                      <div className="bd-example">
                        <form className="row g-3">
                          <div className="col-md-6">
                            <label htmlFor="id" className="form-label" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Id is only modifiable for new cars">Id:</label>
                            <input type="number" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} required/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="make" className="form-label">Make:</label>
                            <input type="text" className="form-control" id="make" value={make} onChange={(e) => setMake(e.target.value)} required/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="model" className="form-label">Model:</label>
                            <input type="text" className="form-control" id="model" value={model} onChange={(e) => setModel(e.target.value)} required/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="seats" className="form-label">Seats:</label>
                            <input type="number" className="form-control" id="seats" value={seats} onChange={(e) => setSeats(e.target.value)} required/>
                          </div>
                          <div className="col-md-12">
                            <label htmlFor="image_url" className="form-label">Image URL:</label>
                            <input type="text" className="form-control" id="image_url" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleCarSave()}>Save</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </>

    )

}

export default Car;

      // Useful links
      // https://youtu.be/pJiRj02PkJQ
      // https://jasonwatmore.com/post/2020/11/11/react-fetch-http-delete-request-examples
      // https://stackoverflow.com/questions/42089548/how-to-add-delay-in-react-js
      // https://youtu.be/TmVqwhBUiSM
      // https://youtu.be/IkMND33x0qQ