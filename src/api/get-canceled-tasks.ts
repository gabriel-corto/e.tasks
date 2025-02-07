import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface CanceledTasksResponse {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}

export async function getCanceledTasks() {
  const response = await api.get<CanceledTasksResponse[]>("/tasks");

  return response.data;
}
