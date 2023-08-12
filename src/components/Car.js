import { useState } from "react";

function Car(props){
    let cars = props.cars;
    const carItems = cars.map((car, index) =>
            <div className="col" key={car.id}>
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
                                <button type="button" className="btn btn-info">Modify</button>
                                <button type="button" className="btn btn-danger" style={{marginLeft: '20px'}}>Delete</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>        
    )

    function handleCarSave(car){
      console.log(cars);
      cars.push(car);
      console.log(cars)
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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive" style={{margin: '20px 0 0 50%'}}>
            Add a new car
        </button>

          <div className="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLiveLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div>
                      <div className="bd-example-snippet bd-code-snippet">
                        <div className="bd-example">
                          <form className="row g-3">
                            <div className="col-md-6">
                              <label for="id" className="form-label">Id:</label>
                              <input type="number" className="form-control" id="id" required/>
                            </div>
                            <div className="col-md-6">
                              <label for="make" className="form-label">Make:</label>
                              <input type="text" className="form-control" id="make" required/>
                            </div>
                            <div className="col-md-6">
                              <label for="model" className="form-label">Model:</label>
                              <input type="text" className="form-control" id="model" required/>
                            </div>
                            <div className="col-md-6">
                              <label for="seats" className="form-label">Seats:</label>
                              <input type="number" className="form-control" id="seats" required/>
                            </div>
                            <div className="col-md-12">
                              <label for="image_url" className="form-label">Image URL:</label>
                              <input type="text" className="form-control" id="image_url" />
                            </div>
                          </form>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleCarSave({
                    id: document.getElementById("id").value,
                    make: document.getElementById("make").value,
                    model: document.getElementById("model").value,
                    seats: document.getElementById("seats").value,
                    imgUrl: document.getElementById("image_url").value,

                  })}>Save</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </>

    )

}

export default Car;
