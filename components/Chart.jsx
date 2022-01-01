import { useEffect, useState } from 'react';
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
  const [activeRange, setActiveRange] = useState(0);

  const onSubmit = data => {
    setSelectedMonthStats(chart_three);
  };

  const ranges = [
    {
      name: 'Hourly',
      data: chart_one,
    },
    {
      name: 'Daily',
      data: chart_two,
    },
    {
      name: 'Weekly',
      data: chart_three,
    },
    {
      name: 'Monthly',
      data: chart_one,
    },
  ];

  return (
    <>
      <div className="h-56 sm:h-96 mb-10 sm:mb-0 w-full py-5 rounded-xl mt-3 sm:mt-10 bg-white">
        <div className="flex w-full justify-between sm:px-5 mb-2">
          <h2 className="text-base sm:text-xl mt-2 sm:mt-0 font-bold text-font-darker ">
            {title}
          </h2>
          <div className="w-36 sm:w-40">
            <SelectInput
              selectedOption={selectedMonth}
              setSelectedOption={setSelectedMonth}
              options={[{ name: '1 month' }, { name: '2 month' }]}
            />
          </div>
        </div>
        <div className="hidden sm:block w-full h-full">
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
                  <stop offset="50%" stopColor="#347F95" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#347F95" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#989898' }} />
              <YAxis tick={{ fill: '#989898' }} orientation="right" />
              <CartesianGrid x="2" vertical={false} strokeDasharray="4" />
              <Tooltip
                wrapperStyle={{
                  color: 'red',
                  backgroundColor: '#000 !important',
                }}
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
        <div className="block sm:hidden w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={selectedMonthStats}
              fontSize={12}
              fontWeight={'semibold'}
              margin={{
                top: 10,
                right: 5,
                left: 5,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="#347F95" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#347F95" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fill: '#989898' }}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
              <Tooltip
                wrapperStyle={{
                  color: 'red',
                  backgroundColor: '#000 !important',
                }}
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
                  r: 4,
                  stroke: '#347F95',
                  strokeWidth: 1,
                  fill: '#347F95',
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
      </div>
      <div className="flex sm:hidden space-x-4 py-6">
        {ranges.map(({ name, data }, index) => (
          <div
            onClick={() => {
              setActiveRange(index);
              setSelectedMonthStats(data);
            }}
            key={`${name}${index}`}
            className={`${
              activeRange === index
                ? 'text-primary-base border-primary-base'
                : 'border-gray-200'
            } py-2 px-4 border  text-sm rounded-lg font-semibold`}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chart;
