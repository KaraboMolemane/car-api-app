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

    return(
        <>
        <div>
        <div class="bd-example-snippet bd-code-snippet"><div class="bd-example">
        <div class="row  row-cols-1 row-cols-md-2 g-4">
            {carItems}
        </div>
        </div></div>

      </div>
        </>

    )

}

export default Car;
