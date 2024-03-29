import React from "react";
import Tour from "./Tour";
import "./Tour.css"



const Tours = ({tours, removeTour }) => {
  return  (
    <section className="section">
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tours.map((tour) => {

                return <Tour key={tour.id} {...tour} removeTour={removeTour}>

                </Tour>
            })}
        </div>
    </section>
  )
};

export default Tours;
