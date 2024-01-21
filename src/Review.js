import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css"
//we imported all the necessary components and also installed the react icowns 
const Review = () => {
  const [index, setIndex] = useState(0);
  //we created a useState so that we can have access to kthe data distructured , we have the index and setindex , the indes is initially 0 which shows that we are pointing to the first item of our data
  //we will be using setIndex to update and change the index so that we can change the items of our data arrey

  const { name, job, image, text } = people[index];
  //here is where we distructued out data , then callig on the name , job , image and text which when written dinamically , it will display  the infor 
  // for the index when updated

  const checkNumber = (number) => { // 1
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
// THE CHECK NUMBER FUNCTION  is to check (number)  which is comming from prevePerson and nextPerson function, it giving it 3 options ,
// when the button is clicked whether to move to the first data or the next data or the last data
  const nextPerson = () => {
    setIndex((index) => { // 0
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // the next person function , this set the setIndex to the current index , then create a new index which is adding 1 to the current index
  // then we return check number which checkmate the new index whic is a number and still follow the rules of check Number
  const prevePerson = () => {4
    setIndex((index) => {
      let newIndex = index - 1; // -1
      return checkNumber(newIndex);
    });
  };
  //  this prevePerson function set setIndex to the current index and create a new variable newIndex which substravt 1 from the current index 
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index){
      randomNumber = index + 1;
      // this is a function that generates a random number and rounds it down them multiply by  people.length ie the number of array of our static data
      // and then add 1 to index state if its equal to the value of index so that it can move to the next valque
      // here we are just changing the value of our index randomly 
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    //here we have a return then we created an article which will server an the wrapper for the review component
    <article className="review"> 
    {/*inside the article container we created a div container which is the image container which will carry the image and the quote icon*/}
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
          {/*the spam component is to hold the icon inside of the image container, so that we can later style it in other to position it in a good position of the image */}
        </span>
      </div>
      {/* this div above covers the image container  then we have  h4 tag that displays the name for the current state job and text info
      on top of each other . they all have classes so that they can be styled*/}
      
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      {/* we then create another container that carries the whole of the button the prev-button will stay side by side with thenext-button 
      inside the same button container   */}
      <div className="button-container">
        <button className="prev-btn" onClick={prevePerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
      {/* this is a random button container whic has an onclick of random person , the random person is a function that was created to change the 
      state of our index to a random number from 0 to 3 since it 4 state */}
    </article>
  );
};

export default Review;
// thanks forreading.
