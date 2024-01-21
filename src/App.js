import React from "react";
import Review from "./Review";
import "./App.css"
function App() {
  return (
    <main>
      <section className='container'>
        <div className="title">
          <h3>OUR REVIEWS</h3>
          <div className="underLine"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}
// i imported the review componet here  in other to get displayed in the app  component which is wraped in a main component which also contain 
// a class name of container  which is styled.
export default App;
