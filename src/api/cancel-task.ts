import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface CancelTaskBody {
  status: TaskStatus;
}
interface CancelTaskParams {
  id?: string;
}
export async function cancelTask({
  id,
  status,
}: CancelTaskParams & CancelTaskBody) {
  await api.patch<CancelTaskBody>(`/tasks/${id}`, {
    status,
  });
}
