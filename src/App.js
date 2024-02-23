import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
   <div className='topDiv'> 
   <div className='nextDiv'>
   <h1 className='heading'> Our Testimonials</h1>
    <div className='underline'></div>
    <Testimonial reviews={reviews}/>
   </div>

   </div>
  );
}

export default App;

