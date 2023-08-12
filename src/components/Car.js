import { useState } from "react";

function Car(props){
    let cars = props.cars;
    const carItems = cars.map((car, index) =>
            <div class="col" key={car.id}>
            <div class="card">
              <div class="row g-0">
                <div class="col-md-7">
                    <img height='250px' width='100%' src={car.imgUrl} alt={car.model+"_image"}></img>
                </div>
                <div class="col-md-5">
                  <div class="card-body">
                    <h5 class="card-title">Car details</h5>
                    <p class="card-text">Id: <span>{car.id}</span></p>
                    <p class="card-text">Make: <span>{car.make}</span></p>
                    <p class="card-text">Model:<span>{car.model}</span></p>
                    <p class="card-text">Seats: <span>{car.seats}</span></p>
                    <div>
                        <div class="bd-example-snippet bd-code-snippet">
                            <div class="bd-example">        
                                <button type="button" class="btn btn-info">Update</button>
                                <button type="button" class="btn btn-danger" style={{marginLeft: '20px'}}>Delete</button>
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
      alert(car.imgUrl);
      alert(car.id);
    }

    return(
      <>
        <div>
          <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example" style={{marginTop: '20px'}}>
              <div class="row  row-cols-1 row-cols-md-2 g-4">
                  {carItems}
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive" style={{margin: '20px 0 0 50%'}}>
            Add a new car
        </button>

          <div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLiveLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                      <div class="bd-example-snippet bd-code-snippet">
                        <div class="bd-example">
                          <form class="row g-3">
                            <div class="col-md-6">
                              <label for="id" class="form-label">Id:</label>
                              <input type="number" class="form-control" id="id" required=""/>
                            </div>
                            <div class="col-md-6">
                              <label for="make" class="form-label">Make:</label>
                              <input type="text" class="form-control" id="make" required=""/>
                            </div>
                            <div class="col-md-6">
                              <label for="model" class="form-label">Model:</label>
                              <input type="text" class="form-control" id="model" required=""/>
                            </div>
                            <div class="col-md-6">
                              <label for="seats" class="form-label">Seats:</label>
                              <input type="number" class="form-control" id="seats" required=""/>
                            </div>
                            <div class="col-md-12">
                              <label for="image_url" class="form-label">Image URL:</label>
                              <input type="text" class="form-control" id="image_url" />
                            </div>
                          </form>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleCarSave({
                    id: document.getElementById("id").value,
                    make: document.getElementById("make").value,
                    model: document.getElementById("model").value,
                    seats: document.getElementById("seats").value,
                    imgUrl: document.getElementById("image_url").value,

                  })}>Save</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </>

    )

}

export default Car;
