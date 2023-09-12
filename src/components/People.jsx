import React, { useState } from 'react';
import data from '../data.js';
import { Person } from './Person.jsx';

export const People = () => {
  const [peopleList, setPeopleList] = useState(data);
  const [currentIdx, setCurrentIdx] = useState(0);
  const next = () => {
    if (currentIdx === peopleList.length - 1) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((previousIdx) => previousIdx + 1);
    }
  };
  const previous = () => {
    if (currentIdx === 0) {
      setCurrentIdx(peopleList.length - 1);
    } else {
      setCurrentIdx((previousIdx) => previousIdx - 1);
    }
  };
  return (
    <div>
      <Person {...peopleList[currentIdx]} previous={previous} next={next} />
    </div>
  );
};
