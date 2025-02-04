type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface TaskStatusProps {
  status: TaskStatus;
}

export function TaskStatus({ status }: TaskStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <>
          <span className="w-2 h-2 rounded-full bg-slate-500"></span>
          <span>Pendente</span>
        </>
      )}
      {status === "completed" && (
        <>
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Concluída</span>
        </>
      )}
      {status === "canceled" && (
        <>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span>Cancelado</span>
        </>
      )}
      {status === "in-progress" && (
        <>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>Em progresso</span>
        </>
      )}
    </div>
  );
}
