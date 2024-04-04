import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement);


const chartData = {
  labels:['Seed Sale', 'Exchange Listings', 'Marketing', 'Team','Public Sale'],
  datasets: [
    {
      data: [5,10,10,10,65],
      label:'100M Total Supply',
      backgroundColor: [
        '#5FF0E0',
        '#717BF7',
        '#5FF0E0',
        '#717BF7',
        '#5FF0E0',
      ],
      borderColor:[
        '#717BF7',
        '#717BF7',
        '#717BF7',
        '#717BF7',
        '#717BF7',
      ],
      borderWidth: 1,
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