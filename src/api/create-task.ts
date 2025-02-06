import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface CreateTaskBody {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
export async function createTask({
  id,
  name,
  status,
  createdAt,
}: CreateTaskBody) {
  await api.post("/tasks", {
    id,
    name,
    status,
    createdAt,
  });
}
