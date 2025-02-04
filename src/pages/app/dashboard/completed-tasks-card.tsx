import { getCompletedTasks } from "@/api/get-completed-tasks";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";

export function CompletedTasksCard() {
  const { data: completedTasks } = useQuery({
    queryKey: ["tasks", "completed-tasks"],
    queryFn: getCompletedTasks,
  });

  const totalCompleted = completedTasks?.length;

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Concluídas
        </strong>

        <CheckCircle className="text-emerald-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">{totalCompleted}</strong>
        <span className="text-foreground/80">
          - voçê completou {totalCompleted} tarefas
        </span>
      </CardContent>
    </Card>
  );
}
