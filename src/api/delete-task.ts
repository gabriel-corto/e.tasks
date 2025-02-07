import { api } from "@/lib/axios";

interface DeleteTaskParams {
  id?: string;
}
export async function deleteTask({ id }: DeleteTaskParams) {
  await api.delete(`/tasks/${id}`);
}
