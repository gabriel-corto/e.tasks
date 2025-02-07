import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TasksChartResponse {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}

export async function getTasksChart() {
  const response = await api.get<TasksChartResponse[]>("/tasks");

  return response.data;
}
