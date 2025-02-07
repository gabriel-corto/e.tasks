import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle, Loader2, Play, Trash, XCircle } from "lucide-react";
import { TaskStatus } from "./task-status";
import { formatDistanceToNow } from "date-fns";
import { pt } from "date-fns/locale/pt";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteTask } from "@/api/delete-task";
import { toast } from "sonner";
import { cancelTask } from "@/api/cancel-task";
import { startTask } from "@/api/start-task";
import { completeTask } from "@/api/complete-task";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TaskProps {
  task: {
    id?: string;
    name: string;
    status: TaskStatus;
    createdAt: Date;
  };
}
export function TaskTableRow({ task }: TaskProps) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteTaskFn, isPending: isDeleting } = useMutation({
    mutationKey: ["tasks", task.id],
    mutationFn: deleteTask,

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"] as InvalidateQueryFilters);
    },
  });

  const { mutateAsync: cancelTaskFn, isPending: isCanceling } = useMutation({
    mutationKey: ["tasks", task.id],
    mutationFn: cancelTask,

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"] as InvalidateQueryFilters);
    },
  });

  const { mutateAsync: startTaskFn, isPending: isStarting } = useMutation({
    mutationKey: ["tasks", task.id],
    mutationFn: startTask,

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"] as InvalidateQueryFilters);
    },
  });
  const { mutateAsync: completeTaskFn, isPending: isCompleting } = useMutation({
    mutationKey: ["tasks", task.id],
    mutationFn: completeTask,

    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"] as InvalidateQueryFilters);
    },
  });

  async function handleDeleteTask() {
    try {
      await deleteTaskFn({ id: task.id });
      toast.success("Tarefa Excluida com sucesso!");
    } catch {
      toast.error("Ops! Não foi possível excluir tarefa");
    }
  }

  async function handleStartTask() {
    try {
      await startTaskFn({ id: task.id, status: "in-progress" });
      toast.success(`[${task.name}] Em progresso!`);
    } catch {
      toast.error("Ops! Não foi possível concluir esta acção");
    }
  }

  async function handleCancelTask() {
    try {
      await cancelTaskFn({ id: task.id, status: "canceled" });
      toast.success(`[${task.name}] Foi Cancelada!`);
    } catch {
      toast.error("Ops! Não foi possível concluir esta acção");
    }
  }

  async function handleCompleteTask() {
    try {
      await completeTaskFn({ id: task.id, status: "completed" });
      toast.success(`[${task.name}] Concluído!`);
    } catch {
      toast.error("Ops! Não foi possível concluir esta acção");
    }
  }

  return (
    <TableRow>
      <TableCell>{task.name}</TableCell>
      <TableCell>
        <TaskStatus status={task.status} />
      </TableCell>
      <TableCell>
        {formatDistanceToNow(new Date(task.createdAt), {
          locale: pt,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-amber-600 hover:text-amber-600 font-bold"
          disabled={["canceled", "in-progress", "completed"].includes(
            task.status
          )}
          onClick={() => {
            handleStartTask();
          }}
        >
          {isStarting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Aguarde...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Iniciar</span>
            </>
          )}
        </Button>
      </TableCell>

      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-emerald-500 hover:text-emerald-600 font-bold"
          disabled={["canceled", "pending", "completed"].includes(task.status)}
          onClick={() => {
            handleCompleteTask();
          }}
        >
          {isCompleting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Aguarde...</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Concluir</span>
            </>
          )}
        </Button>
      </TableCell>

      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-neutral-500 hover:text-neutral-600 font-bold"
          disabled={["completed", "in-progress", "canceled"].includes(
            task.status
          )}
          onClick={() => {
            handleCancelTask();
          }}
        >
          {isCanceling ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Cancelando...</span>
            </>
          ) : (
            <>
              <Trash className="w-4 h-4" />
              <span>Cancelar</span>
            </>
          )}
        </Button>
      </TableCell>

      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-rose-500 hover:text-rose-600 font-bold"
          onClick={() => {
            handleDeleteTask();
          }}
        >
          {isDeleting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Excluindo...</span>
            </>
          ) : (
            <>
              <Trash className="w-4 h-4" />
              <span>Excluir</span>
            </>
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
}
