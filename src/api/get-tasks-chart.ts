import { api } from "@/lib/axios";

interface TasksChartResponse {
  status: string;
  points: number;
}
export async function getTasksChart() {
  const response = await api.get<TasksChartResponse[]>("/tasks-charts");

  return response.data;
}
