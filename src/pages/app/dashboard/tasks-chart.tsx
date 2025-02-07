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
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasksChart,
  });

  const completedTasks = tasks?.filter((task) => task.status === "completed");
  const pendingTasks = tasks?.filter((task) => task.status === "pending");
  const canceledTasks = tasks?.filter((task) => task.status === "canceled");

  const chart = [
    {
      status: "Completed",
      points: completedTasks?.length,
    },
    {
      status: "Pendentes",
      points: pendingTasks?.length,
    },
    {
      status: "Canceladas",
      points: canceledTasks?.length,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={chart}
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
