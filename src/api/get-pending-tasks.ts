import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface PendingTasksResponse {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}

export async function getPendingTasks() {
  const response = await api.get<PendingTasksResponse[]>("/tasks");

  return response.data;
}
