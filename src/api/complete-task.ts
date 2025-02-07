import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface CompleteTaskBody {
  status: TaskStatus;
}
interface CompleteTaskParams {
  id?: string;
}
export async function completeTask({
  id,
  status,
}: CompleteTaskParams & CompleteTaskBody) {
  await api.patch<CompleteTaskBody>(`/tasks/${id}`, {
    status,
  });
}
