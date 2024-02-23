import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card';
import './Card.css';

const Testimonial = (props) => {
  let reviews=props.reviews;
  const[index,setIndex]=useState(0);
  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }

  }
  function rightShiftHandler(){
    if(index+1>=reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }

  }
  function surpriseHandler(){
    let randomIndex= Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);

  }
  return (
    <div className='whiteBox'>
        <Card review ={reviews[index]}/>
        <div className='full'>
        <button className='half' onClick={leftShiftHandler}><FiChevronLeft/></button>
        <button className='half' onClick={rightShiftHandler}><FiChevronRight/></button>
      </div>

      <div className='lastButton'>
        <button className='last' onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial
