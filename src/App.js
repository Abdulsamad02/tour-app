import React from "react";
import Review from "./Review";
import "./App.css"
function App() {
  return (
    <main>
      <section className='container'>
        <div className="title">
          <h2>OUR REVIEWS</h2>
          <div className="underLine"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default App;
