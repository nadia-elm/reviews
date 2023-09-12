import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Person = ({ name, job, image, text, previous, next }) => {
  return (
    <article className='review-container'>
      <div className='img-container'>
        <img src={image} alt={name} className='review-img' />
      </div>
      <h4 className='person-name'>{name}</h4>
      <h5>{job}</h5>
      <p>{text}</p>
      <div className='btn-wrapper'>
        <button onClick={() => next()} className='icon-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={() => previous()} className='icon-btn'>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};
