import React from 'react';
import './FocusTopics.css'; // Import or define your CSS file

const FocusTopics = () => {
  return (
    <div className="containerFT">
      <div className="heading">Top 10 Focus Topics</div>
      <ul className="focus-list">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index} className="focus-item">
            <span>{`${index + 1}. Focus Topic ${index + 1}`}</span>
            <span className="score">{`Score ${index + 1}`}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="see-all">See All</a>
    </div>
  );
};

export default FocusTopics;
