import { getCompletedTasks } from "@/api/get-completed-tasks";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";

export function CompletedTasksCard() {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: getCompletedTasks,
  });

  const completedTasks = tasks?.filter((task) => {
    return task.status === "completed";
  });

  const amountOfCompletedTasks = completedTasks?.length as number;

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Concluídas
        </strong>

        <CheckCircle className="text-emerald-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">
          {amountOfCompletedTasks}
        </strong>
        <span className="text-foreground/80">
          - voçê completou {amountOfCompletedTasks}{" "}
          {amountOfCompletedTasks > 1 ? "Tarefas" : "Tarefa"}
        </span>
      </CardContent>
    </Card>
  );
}
