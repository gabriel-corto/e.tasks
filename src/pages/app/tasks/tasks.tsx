import { Toolbar } from "@/components/toolbar";
import { ArrowDownLeftFromCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskTableRow } from "./task-table-row";
import { TaskTableFilter } from "./task-table-filter";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/api/get-tasks";
import { useLocation } from "react-router-dom";

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

export function Tasks() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const q = params.get("q") || "";
  const status = params.get("status") as TaskStatus;

  const { data: tasks } = useQuery({
    queryKey: ["tasks", { q, status }],
    queryFn: () =>
      getTasks({
        q: q || undefined,
        status: status || undefined,
      }),
  });
  return (
    <>
      <Helmet title="Tarefas" />

      <div>
        <Toolbar
          children={<ArrowDownLeftFromCircle />}
          title="Tarefas Cadastradas"
        />

        <div className="mt-16">
          <TaskTableFilter />
        </div>

        <div className="mt-4 border rounded-md">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-100 dark:bg-slate-900">
                <TableHead className="w-[350px]">Nome</TableHead>
                <TableHead className="w-[150px]">Status</TableHead>
                <TableHead className="w-[200px]">Data de Criação</TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tasks?.map((task) => {
                return <TaskTableRow task={task} key={task.name} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
