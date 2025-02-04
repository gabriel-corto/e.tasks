import { Toolbar } from "@/components/toolbar";
import { House } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { CompletedTasksCard } from "./completed-tasks-card";
import { PendingTasksCard } from "./pending-tasks-card";
import { CanceledTasksCard } from "./canceled-tasks-card";
import { TasksChart } from "./tasks-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div>
        <Toolbar children={<House />} title="Dashboard" />

        <div className="mt-16 grid grid-cols-3 gap-6">
          <CompletedTasksCard />
          <PendingTasksCard />
          <CanceledTasksCard />
        </div>

        <div className="mt-10 grid grid-cols-9">
          <Card className="col-span-5">
            <CardHeader>
              <CardTitle className="text-foreground/60">
                Fluxo de cumprimento das tarefas diárias
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TasksChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
