import { getTasksChart } from "@/api/get-tasks-chart";
import { useQuery } from "@tanstack/react-query";
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

export function TasksChart() {
  const { data: tasksChart } = useQuery({
    queryKey: ["tasks", "charts"],
    queryFn: getTasksChart,
  });
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={tasksChart}
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
