import { api } from "@/lib/axios";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface StartTaskBody {
  status: TaskStatus;
}
interface StartTaskParams {
  id?: string;
}
export async function startTask({
  id,
  status,
}: StartTaskParams & StartTaskBody) {
  await api.patch<StartTaskBody>(`/tasks/${id}`, {
    status,
  });
}
