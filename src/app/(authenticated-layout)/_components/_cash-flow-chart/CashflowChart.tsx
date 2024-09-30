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
    uv: 4000,
    pv: 2400,
  },
  {
    month: 'FEB',
    uv: 3000,
    pv: 1398,
  },
  {
    month: 'MAR',
    uv: 2000,
    pv: 9800,
  },
  {
    month: 'APR',
    uv: 2780,
    pv: 3908,
  },
  {
    month: 'MAY',
    uv: 1890,
    pv: 4800,
  },
  {
    month: 'JUN',
    uv: 2390,
    pv: 3800,
  },
  {
    month: 'JUL',
    uv: 5490,
    pv: 5300,
  },
  {
    month: 'AUG',
    uv: 11490,
    pv: 8300,
  },
  {
    month: 'SEP',
    uv: 3490,
    pv: 4300,
  },
  {
    month: 'OCT',
    uv: 2490,
    pv: 10300,
  },
  {
    month: 'NOV',
    uv: 5490,
    pv: 7300,
  },
  {
    month: 'DEC',
    uv: 1000,
    pv: 6300,
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
          dataKey='pv'
          fill='#6F00FF'
          barSize={17}
          radius={2}
          activeBar={<Rectangle fill='#a467f4' stroke='blue' />}
        />
        <Bar
          dataKey='uv'
          fill='#EA157F'
          barSize={17}
          radius={2}
          activeBar={<Rectangle fill='#e966a7' stroke='purple' />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
