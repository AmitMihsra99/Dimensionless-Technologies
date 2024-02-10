import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import generateData from './generateData'; 
import './Apex.css'; 

function ApexChart() {
  const [bubbleChartData, setBubbleChartData] = useState({
    series: [
      {
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'bubble',
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Simple Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'category',
      },
      yaxis: {
        max: 70
      }
    }
  });

  const [pieChartData, setPieChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  useEffect(() => {
    
  }, []);

  return (
  
    <div className='container'>    
      <div id="bubble-chart">
      <h4>News & Data Flow</h4>
        <ReactApexChart options={bubbleChartData.options} series={bubbleChartData.series} type="bubble" height={350} />
      </div>
      <div id="pie-chart">
        <ReactApexChart options={pieChartData.options} series={pieChartData.series} type="donut" height={350} />
      </div>
    </div>
  );
}

export default ApexChart;
