import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Play, Trash, XCircle } from "lucide-react";
import { TaskStatus } from "./task-status";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TaskProps {
  task: {
    name: string;
    status: TaskStatus;
    createdAt: Date;
  };
}
export function TaskTableRow({ task }: TaskProps) {
  return (
    <TableRow>
      <TableCell>{task.name}</TableCell>
      <TableCell>
        <TaskStatus status={task.status} />
      </TableCell>
      <TableCell>{task.createdAt.toLocaleString()}</TableCell>
      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-emerald-500 hover:text-emerald-600 font-bold"
        >
          <Play className="w-4 h-4" />
          <span>Iniciar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-neutral-500 hover:text-neutral-600 font-bold"
        >
          <XCircle className="w-4 h-4" />
          <span>Cancelar</span>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="sm"
          variant="ghost"
          className="text-rose-500 hover:text-rose-600 font-bold"
        >
          <Trash className="w-4 h-4" />
          <span>Excluir</span>
        </Button>
      </TableCell>
    </TableRow>
  );
}
