import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface CompletedTasksResponse {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}

export async function getCompletedTasks() {
  const response = await api.get<CompletedTasksResponse[]>("/tasks-completed");

  return response.data;
}
