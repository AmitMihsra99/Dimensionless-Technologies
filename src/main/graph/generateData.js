// generateData.js

function generateData(startDate, numberOfPoints, range = { min: 10, max: 60 }) {
    const data = [];
    const date = new Date(startDate);
  
    for (let i = 0; i < numberOfPoints; i++) {
      const x = date.toISOString().split('T')[0]; 
      const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      const z = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  
      data.push({ x, y, z });
      date.setDate(date.getDate() + 1); 
    }
  
    return data;
  }
  
  export default generateData;
  