import React from 'react';
import '../assets/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section classNamee='carousel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
