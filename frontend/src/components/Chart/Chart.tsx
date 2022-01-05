import React from 'react';
import {
  Chart as RumbleChart, Labels, Layer, Lines, Ticks,
} from 'rumble-charts';
import './styles.css';

const series = [{
  data: Array(31).fill(0).map(() => Math.ceil(Math.random() * 10)),
}, {
  data: Array(31).fill(0).map(() => Math.ceil(Math.random() * 10)),
}];

const Chart = () => (
  <RumbleChart height={300} width={800} series={series} className="chart-container">

    <Layer width="90%" height="60%" position="middle center">
      <Ticks
        axis="y"
        lineLength="100%"
        lineVisible
        lineStyle={{
          stroke: 'lightgray',
        }}
        labelStyle={{
          dominantBaseline: 'middle',
          fill: 'lightgray',
          textAnchor: 'end',
        }}
        ticks={Array(Math.max(...[...series[0].data, ...series[1].data]) + 1).fill(0)
          .map((value, index) => ({ y: index, label: index }))}
      />
      <Lines />
      <Labels />
    </Layer>
  </RumbleChart>
);

export default Chart;