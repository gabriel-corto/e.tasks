import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface NewTaskBody {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
export async function newTask({ id, name, status, createdAt }: NewTaskBody) {
  await api.post("/tasks", {
    id,
    name,
    status,
    createdAt,
  });
}
