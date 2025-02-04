import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Play, Trash, XCircle } from "lucide-react";
import { TaskStatus } from "./task-status";

export function TaskTableRow() {
  return (
    <TableRow>
      <TableCell>Configurar o Ambiente de Produção</TableCell>
      <TableCell>
        <TaskStatus status="pending" />
      </TableCell>
      <TableCell>30 minutos</TableCell>
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
