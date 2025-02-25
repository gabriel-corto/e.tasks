import { Plus } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { CreateTaskDialog } from "@/pages/app/dashboard/create-task-dialog";

interface ToolbarProps {
  children: ReactNode;
  title: string;
}
export function Toolbar({ children, title }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-foreground">
        {children}
        <strong className="text-font-bold">{title}</strong>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-md font-bold  ">
            <Plus className="w-5 h-5" />
            <span>Cadastrar nova tarefa</span>
          </Button>
        </DialogTrigger>

        <CreateTaskDialog />
      </Dialog>
    </div>
  );
}
