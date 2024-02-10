import React from 'react';
import './Refinddata.css'; // Import your CSS file
import FocusTopics from './FocusTopics';
const inputData = [
  {
    type: 'ERU',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact: 'Neutral',
    probability: 'High'
  },
  {
    type: 'INR',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact: 'Neutral',
    probability: 'High'
  },
  {
    type: 'CAD',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact: 'Neutral',
    probability:'High'
  },
  {
    type: 'CAD',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact:'Neutral',
    probability:'High'
  },
  {
    type: 'CAD',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact: 'Neutral',
    probability: 'High'
  },
  {
    type: 'OIL',
    news:'The Euro has steadied against the Us Dollar on Thursday as the market ponders the path of Fed rate hikes',
    score: +1,
    impact: 'Neutral',
    probability: 'High'
  },
];

function getTypeColor(type) {
  const typeColors = {
    'ERU': 'green',
    'IDA':'blue',
    'CAD': "red",
    'OIL':'green'

  };
  return typeColors[type] || 'blue';
}

function Refinddata() {
  return (
    <div className="data-table-container">
     <h4>Refined News & Data Flow </h4>
      <table className="data-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>News</th>
            <th>Score</th>
            <th>Impact</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {inputData.map((data, index) => (
            <tr key={index}>
              <td>
                <div
                  className="type-bubble"
                  style={{ backgroundColor: getTypeColor(data.type) }}>
                  {data.type}
                </div>
              </td>
              <td>{data.news}</td>
              <td>+{data.score}</td>
              <td>{data.impact}</td>
              <td>{data.probability}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
}

export default Refinddata;
