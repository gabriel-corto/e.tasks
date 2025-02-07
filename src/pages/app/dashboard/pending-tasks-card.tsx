import { getPendingTasks } from "@/api/get-pending-tasks";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";

export function PendingTasksCard() {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getPendingTasks,
  });

  const completedTasks = tasks?.filter((task) => {
    return task.status === "pending";
  });

  const amountOfPendingTasks = completedTasks?.length as number;

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Pendentes
        </strong>

        <CheckCircle className="text-amber-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">
          {amountOfPendingTasks}
        </strong>
        <span className="text-foreground/80">
          - voçê tem {amountOfPendingTasks}{" "}
          {amountOfPendingTasks > 1 ? "Tarefas" : "Tarefa"} Pendente
        </span>
      </CardContent>
    </Card>
  );
}
