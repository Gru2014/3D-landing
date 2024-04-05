import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement,Tooltip);


const chartData = {

  labels: ['Seed Sale', 'Exchange Listings', 'Marketing', 'Team', 'Public Sale'],
  datasets: [
    {
      data: [5, 10, 10, 10, 65],
      label: '100M Total Supply',
      backgroundColor: [
        '#5FF0E0',
        '#717BF7',
        '#5FF0E0',
        '#717BF7',
        '#5FF0E0',
      ],
      title: "Total revenue: $64.08K",
      borderColor: [
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
const options = {
  plugins: {
    title: {
      display: true,
      text: 'Doughnut Chart',
      color: 'white',
      font: {
        size: 34
      },
      padding: {
        top: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      }
      
    }
  }

}
const Chart: React.FC = () => {
  return (
    <div className=' cursor-pointer'>
      <Doughnut width={450} height={450} data={chartData} options={options} title='100M Total Supply'  />
    </div>
  )
}

export default Chart

// import React from 'react';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';

// // Import the FusionCharts styles
// // import 'fusioncharts/fusioncharts.theme.fusion';

// // Add the charts as dependency to ReactFC
// ReactFC.fcRoot(FusionCharts, Charts);

// const ChartComponent = () => {
//   // Specify the chart configuration
//   const chartConfig = {
//     type: 'doughnut2d',
//     width: '450',
//     height: '450',
//     dataFormat: 'json',
//     dataSource: {
//       chart: {
//         usePlotGradientColor: "1",
//         plotGradientColor: "#717BF7",
//         // numberPrefix: '$',
//         numberSuffix: '%',
//         // plotFillAngle: "0",
//         // plotFillAlpha: "60",
//         plotFillRatio: "90,100",
//         // bgColor: 'transparent',
//         // startingAngle: '5',
//         // showLegend: '1',
//         defaultCenterLabel: '100M Total Supply',
//         // centerLabel: 'Revenue from $label: $value',
//         centerLabelBold: '1',
//         // showTooltip: '0',
//         decimals: '0',
//         // theme: 'fusion',
//       },
//       data: [
//         {
//           label: 'Marketing',
//           value: '10',
//         },
//         {
//           label: 'Seed Sale',
//           value: '5',
//         },
//         {
//           label: 'Infulencers',
//           value: '10',
//         },
//         {
//           label: 'Team',
//           value: '10',
//         },
//         {
//           label: 'Public Sale',
//           value: '65',
//         },
//       ],
//     },
//   };

//   return <ReactFC {...chartConfig} />;
// };

// export default ChartComponent;
