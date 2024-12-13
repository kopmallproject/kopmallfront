'use client';

import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Define the type for the data objects
interface DataItem {
  name: string;
  value: number;
}

// Define the props for the renderCustomizedLabel function
interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const data: DataItem[] = [
  { name: 'Active Orders', value: 400 },
  { name: 'Completed Orders', value: 300 },
  { name: 'Closed Orders', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;

// Add types for the function props
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: LabelProps): JSX.Element => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class RenderChart extends PureComponent {
  render(): JSX.Element {
    return (
      <div
        style={{ textAlign: 'center', width: '100%' }}
        className="flex flex-col items-center justify-center"
      >
        {/* Adjust chart size */}
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150} // Increased the radius for a bigger circle
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Centered Legend */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
          }}
          className="px-4"
        >
          {data.map((entry, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              // className="mb-8"
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: COLORS[index]
                }}
              ></div>
              <div className="flex flex-col gap-1">
                <span className="poppins text-center text-[12px]">
                  {entry.name}
                </span>
                <span className="poppins text-center text-[12px]">
                  ({entry.value})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
