import { createTask } from "@/api/create-task";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { queryClient } from "@/lib/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvalidateQueryFilters, useMutation } from "@tanstack/react-query";
import { Loader2, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const createTaskScheme = z.object({
  taskName: z.string().min(5, "Porfavor insira uma tarefa válida!"),
});

type createTaskFormData = z.infer<typeof createTaskScheme>;

type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface Task {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
export function CreateTaskDialog() {
  const { mutateAsync: createTaskFn } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"] as InvalidateQueryFilters);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<createTaskFormData>({
    resolver: zodResolver(createTaskScheme),
  });

  async function handlecreateTask(data: createTaskFormData) {
    try {
      const createTaskData: Task = {
        id: crypto.randomUUID(),
        name: data.taskName,
        status: "pending",
        createdAt: new Date(),
      };

      await createTaskFn(createTaskData);
      toast.success("Tarefa Cadastrada com suceso!");

      reset();
    } catch {
      toast.error("Erro ao Cadastrar Tarefa!", {
        action: {
          label: "Tentar Novamente",
          onClick: () => {
            handlecreateTask(data);
          },
        },
      });
    }
  }

  return (
    <DialogContent>
      <Logo />
      <DialogTitle className="sr-only">Modal de Nova Tarefa</DialogTitle>
      <DialogDescription className="sr-only">
        Crie e organize suas tarefas
      </DialogDescription>

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handlecreateTask)}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Insira uma nome para sua tarefa</Label>
          <Input
            placeholder="Estudar Node.js"
            type="text"
            {...register("taskName")}
          />
          <span className="text-sm text-rose-500">
            {errors.taskName && errors.taskName.message}
          </span>
        </div>

        <div className="flex items-center justify-end gap-5">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              <span>Cancelar</span>
            </Button>
          </DialogClose>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Cadastrando...</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Cadastrar</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
