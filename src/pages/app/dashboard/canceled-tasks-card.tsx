import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export function CanceledTasksCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <strong className="text-foreground text-lg tracking-tight">
          Tarefas Canceladas
        </strong>

        <XCircle className="text-rose-500 -6 h-6" />
      </CardHeader>
      <CardContent className="mt-[-1rem] flex items-center gap-2">
        <strong className="text-3xl font-extrabold">19</strong>
        <span className="text-foreground/80">- voçê cancelou 19 tarefas</span>
      </CardContent>
    </Card>
  );
}
