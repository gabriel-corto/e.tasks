import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function PendingTasksCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Pendentes
        </strong>

        <CheckCircle className="text-amber-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">11</strong>
        <span className="text-foreground/80">
          - voçê tem 11 tarefas pendentes
        </span>
      </CardContent>
    </Card>
  );
}
