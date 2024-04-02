import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels:['Seed Sale', 'Exchange Listings', 'Marketing', 'Team','Public Sale'],
  datasets: [
    {
      data: [5,10,10,10,65],
      label:'%',
      backgroundImage: [
        'background-image: linear-gradient(to right, #5FF0E0, #717BF7)',
        'background-image: linear-gradient(to right, #5FF0E0, #717BF7)',
        'background-image: linear-gradient(to right, #5FF0E0, #717BF7)',
        'background-image: linear-gradient(to right, #5FF0E0, #717BF7)',
        'background-image: linear-gradient(to right, #5FF0E0, #717BF7)',
      ],
      borderWidth: 1
    }
  ]

}

const Chart:React.FC = () => {
  return (
    <div className=' cursor-pointer'>
      <Doughnut data={chartData} />
    </div>
  )
}

export default Chart