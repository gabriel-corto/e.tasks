import { getCanceledTasks } from "@/api/get-canceled-tasks";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { XCircle } from "lucide-react";

export function CanceledTasksCard() {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getCanceledTasks,
  });

  const completedTasks = tasks?.filter((task) => {
    return task.status === "canceled";
  });

  const amountOfCanceledTasks = completedTasks?.length as number;
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Canceladas
        </strong>

        <XCircle className="text-rose-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">
          {amountOfCanceledTasks}
        </strong>
        <span className="text-foreground/80">
          - voçê cancelou {amountOfCanceledTasks}{" "}
          {amountOfCanceledTasks > 1 ? "Tarefas" : "Tarefa"}
        </span>
      </CardContent>
    </Card>
  );
}
