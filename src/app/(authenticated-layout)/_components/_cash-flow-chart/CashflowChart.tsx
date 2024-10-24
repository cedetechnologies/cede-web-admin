import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

const data = [
  {
    month: 'JAN',
    Outflow: 4000,
    Inflow: 2400,
  },
  {
    month: 'FEB',
    Outflow: 3000,
    Inflow: 1398,
  },
  {
    month: 'MAR',
    Outflow: 2000,
    Inflow: 9800,
  },
  {
    month: 'APR',
    Outflow: 2780,
    Inflow: 3908,
  },
  {
    month: 'MAY',
    Outflow: 1890,
    Inflow: 4800,
  },
  {
    month: 'JUN',
    Outflow: 2390,
    Inflow: 3800,
  },
  {
    month: 'JUL',
    Outflow: 5490,
    Inflow: 5300,
  },
  {
    month: 'AUG',
    Outflow: 11490,
    Inflow: 8300,
  },
  {
    month: 'SEP',
    Outflow: 3490,
    Inflow: 4300,
  },
  {
    month: 'OCT',
    Outflow: 2490,
    Inflow: 10300,
  },
  {
    month: 'NOV',
    Outflow: 5490,
    Inflow: 7300,
  },
  {
    month: 'DEC',
    Outflow: 1000,
    Inflow: 6300,
  },
];

export default function CashflowChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        barGap={0}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis
          dataKey='month'
          tick={{ fontSize: '12px', color: '#1B1C1ECC' }}
        />
        <Tooltip />
        <Bar
          dataKey='Inflow'
          fill='#6F00FF'
          barSize={17}
          radius={2}
          activeBar={<Rectangle fill='#a467f4' stroke='blue' />}
        />
        <Bar
          dataKey='Outflow'
          fill='#EA157F'
          barSize={17}
          radius={2}
          activeBar={<Rectangle fill='#e966a7' stroke='purple' />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
