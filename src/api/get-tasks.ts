import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TasksResponse {
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
interface FilterTasksParams {
  name?: string | undefined | null;
  status?: TaskStatus;
}
export async function getTasks({ name, status }: FilterTasksParams) {
  const response = await api.get<TasksResponse[]>("/tasks", {
    params: {
      name,
      status,
    },
  });

  return response.data;
}
