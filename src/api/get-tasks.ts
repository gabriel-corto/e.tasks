import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TasksResponse {
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
interface FilterTasksParams {
  q?: string | null;
  status?: TaskStatus | null;
}
export async function getTasks({ q, status }: FilterTasksParams) {
  const response = await api.get<TasksResponse[]>("/tasks", {
    params: {
      q,
      status,
    },
  });

  return response.data;
}
