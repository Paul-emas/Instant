import { useState } from 'react';
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import SelectInput from '../components/forms/SelectInput';

import { chart_one, chart_two, chart_three } from '../utils/data';

const Chart = ({ title, selectedMonth, setSelectedMonth }) => {
  const [selectedMonthStats, setSelectedMonthStats] = useState(chart_one);

  const onSubmit = data => {
    setSelectedMonthStats(chart_three);
  };

  return (
    <div className="h-96 w-full py-5 rounded-xl mt-10 bg-white">
      <div className="lg:flex w-full justify-between px-5 mb-2">
        <h2 className="text-xl font-bold text-font-darker ">{title}</h2>
        <div className="w-40">
          <SelectInput
            selectedOption={selectedMonth}
            setSelectedOption={setSelectedMonth}
            options={[{ name: '1 month' }, { name: '2 months' }]}
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart
          data={selectedMonthStats}
          fontSize={12}
          fontWeight={'semibold'}
          margin={{
            top: 10,
            right: 20,
            left: 40,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#347F95" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#347F95" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: '#989898' }} />
          <YAxis tick={{ fill: '#989898' }} orientation="right" />
          <CartesianGrid x="2" vertical={false} strokeDasharray="4" />
          <Tooltip
            wrapperStyle={{ color: 'red', backgroundColor: '#000 !important' }}
            labelStyle={{ color: 'green' }}
            itemStyle={{ color: '#000' }}
            formatter={value => {
              return [`${value}`, `Kwh`];
            }}
            labelFormatter={value => {
              return 'Unit Purchased', value;
            }}
          />
          <Area
            dataKey="pv"
            stroke="#347F95"
            fillOpacity={0.5}
            strokeWidth={2}
            dot={{
              r: 6,
              stroke: '#347F95',
              strokeWidth: 1,
              fill: '#fff',
              fillOpacity: 2,
            }}
            activeDot={{
              r: 5,
              stroke: '#347F95',
              strokeWidth: 4,
              fill: '#fff',
            }}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
