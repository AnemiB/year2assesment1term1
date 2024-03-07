import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, RadialLinearScale, LineElement, PointElement, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Line, Pie, PolarArea, Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title, RadialLinearScale, LineElement, PointElement, BarElement, CategoryScale, LinearScale);

function Chat() {

  const barChartData = {
    labels: ['Tuna', 'Clown Fish', 'Moon Jellyfish', 'Tiger Fish', 'Reef Shark', 'Great White'],
    datasets: [{
      label: 'Amount of local sea life',
      data: [7363, 3532, 5732, 1342, 1231, 2422],
      backgroundColor: 'aqua',
      borderColor: 'black',
      borderWidth: 1,
    }]
  };
  const lineChartData = {
    labels: ['Tuna', 'Moon Jellyfish', 'Tiger Fish', 'Clown Fish', 'Reef Shark', 'Great White'],
    datasets: [
      {
        label: 'Most popular sea life per votes',
        data: [212, 2331, 134, 345, 1743, 901],
        backgroundColor: 'pink',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const pieChartData = {
    labels: ['Tuna', 'Moon Jellyfish', 'Great White', 'Reef Shark'],
    datasets: [
      {
        data: [124, 53, 234, 105],
        backgroundColor: ['orangered', 'purple', 'aqua', 'green'],
      },
    ],
  };
  const polarAreaChartData = {
    labels: ['Moon Jellyfish', 'Reef Shark', 'Great White'],
    datasets: [
      {
        label: 'Most popular',
        data: [2331, 1743, 901],
        backgroundColor: ['orange', 'aqua', 'purple'],
        borderColor: ['orange', 'aqua', 'purple'],
        borderWidth: 1,
      },
    ],
  };
  const radarChartData = {
    labels: ['Tuna', 'Tiger Fish', 'Clown Fish'],
    datasets: [{
      label: 'Least popular',
      data: [212, 134, 345],
      backgroundColor: 'orange',
      borderColor: 'black',
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const lineChartOptions = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {},
    },
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Testing charts',
      },
    },
  };

  return (
    <div className='page'>
      <h1>Chat Page</h1>
      <div>
        <h2>Bar Chart</h2>
        <Bar
          data={barChartData}
          options={options}
        ></Bar>
      </div>
      <div style={{
          width: '600px',
          height: '300px',
          padding: '20px',
        }}

      >
        <h2>Line Chart</h2>
        <Line data={lineChartData}
          options={lineChartOptions} />
      </div>

      <div style={{
        padding: '20px',
        width: '50%',
      }}>
        <h2>Pie Chart</h2>
        <Pie data={pieChartData}
          options={pieChartOptions} />
      </div>

      <div>
        <h2>Polar Area Chart</h2>
        <PolarArea data={polarAreaChartData}
          options={options} />
      </div>

      <div style={{ width: '400px', padding: '10px' }}>
        <h2>Radar Chart</h2>
        <Radar data={radarChartData}
          options={options} />
      </div>
    </div>
  );
}

export default Chat;
