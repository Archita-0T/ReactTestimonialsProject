
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';




function Card(props) {
  let review = props.review;
  return (
    <div className='mainBox'>
      <div className='box'>
        <img className='image' src={review.image} />
        <div className='shadow'></div>
      </div>

      <div className='text'>
        <p className='textStyle'>
          {review?.empName}
        </p>
      </div>

      <div className='text'>
        <p className='job'> 
          {review?.job}
        </p>
      </div>

      <div className='icon'>
        <FaQuoteLeft />
      </div>

      <div className='para'>
        <p>{review?.text}</p>
      </div>

      <div className='icon'>
        <FaQuoteRight />
      </div>

    


    </div>
  );
}

export default Card
