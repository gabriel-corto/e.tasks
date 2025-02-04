import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const data = [
  {
    status: "Concluídas",
    points: 11,
  },
  {
    status: "Pendentes",
    points: 5,
  },
  {
    status: "Canceladas",
    points: 19,
  },
];

export function TasksChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="status"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis dataKey="points" />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3" />
        <Bar dataKey="points" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}
