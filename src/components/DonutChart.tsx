import React, { useEffect, useState } from 'react';
import { SciChartPieSurface, EPieType, SciChartJsNavyTheme, PieSegment, ELegendPlacement, ELegendOrientation, GradientParams, Point, SciChartJSDarkv2Theme, SciChartJSLightTheme, SciChartJSDarkTheme, SciChartSurface } from 'scichart';

interface SimpleDonutChartProps {
  divElementId: string;
}

const SimpleDonutChart: React.FC<SimpleDonutChartProps> = ({ divElementId }) => {

  const [hovered, setHovered] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  useEffect(() => {
    const createDonutChart = async () => {
      // Create the Donut chart
      const sciChartPieSurface = await SciChartPieSurface.create(divElementId, {
        theme: new SciChartJsNavyTheme(),

        pieType: EPieType.Donut,
        holeRadius: 0.7,
        animate: true,
      }); 
      const percent = 1

      sciChartPieSurface.domCanvas2D.style.background = 'Transparent'
      sciChartPieSurface.domDivContainer.style.display = 'none'
      sciChartPieSurface.legend.showLegend = false;
      const pieSegment1 = new PieSegment({
        color: 'rgba(255 255 255 0)',
        value: 5,
        text: "Seed Sale",
        colorLinearGradient: new GradientParams(new Point(0, 1), new Point(1, 1), [
          { color: `rgba(113, 123, 247, ${percent})`, offset: 0 },
          { color: `rgba(95, 240, 224, ${percent})`, offset: 1 },
        ]),
        
      });
      const pieSegment11 = new PieSegment({
        color: '#000000',
        value: 0.2,
        text:'black'
      })
      const pieSegment2 = new PieSegment({
        value: 10,
        text: "influencers",
        colorLinearGradient: new GradientParams(new Point(0, 1), new Point(0.8, 1), [
          { color: `rgba(113, 123, 247, ${percent})`, offset: 0 },
          { color: `rgba(95, 240, 224, ${percent})`, offset: 1 },
        ]),
      });
      const pieSegment3 = new PieSegment({
        value: 10,
        text: "Marketing",
        colorLinearGradient: new GradientParams(new Point(0.3, 0), new Point(0.7, 1), [
          { color: `rgba(113, 123, 247, ${percent})`, offset: 0 },
          { color: `rgba(95, 240, 224, ${percent})`, offset: 1 },
        ]),
      });
      const pieSegment4 = new PieSegment({
        value: 10,
        text: "Team",
        colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
          { color: `rgba(113, 123, 247, ${percent})`, offset: 0 },
          { color: `rgba(95, 240, 224, ${percent})`, offset: 1 },
        ]),
      });
      const pieSegment5 = new PieSegment({
        value: 65,
        text: "Public Sale",
        colorLinearGradient: new GradientParams(new Point(0, 0), new Point(0, 1), [
          { color: `rgba(95, 240, 224, ${percent})`, offset: 0 },
          { color: `rgba(113, 123, 247, ${percent})`, offset: 1 },
        ]),
      });


      sciChartPieSurface.pieSegments.add(pieSegment1,pieSegment11, pieSegment2,pieSegment11, pieSegment3,pieSegment11, pieSegment4,pieSegment11, pieSegment5,pieSegment11);
      sciChartPieSurface.pieSegments['items']

    };

    createDonutChart();

    // Cleanup function to remove the chart when the component unmounts
    return () => {
      // Dispose the chart or perform any necessary cleanup
    };
  }, [divElementId]);

  return <div id={divElementId} className='z-10 flex relative justify-center items-center' style={{ width: "560px", height: "560px", border: '1px black' }}>
  </div>;
};

export default SimpleDonutChart;
