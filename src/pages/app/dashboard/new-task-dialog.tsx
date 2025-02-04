import { newTask } from "@/api/new-task";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const newTaskScheme = z.object({
  taskName: z.string().min(5, "Porfavor insira uma tarefa válida!"),
});

type NewTaskFormData = z.infer<typeof newTaskScheme>;
type TaskStatus = "pending" | "in-progress" | "completed" | "canceled";

interface NewTasData {
  id: string;
  name: string;
  status: TaskStatus;
  createdAt: Date;
}
export function NewTaskDialog() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskScheme),
  });

  const { mutateAsync: newTaskFn } = useMutation({
    mutationFn: newTask,
  });

  async function handleNewTask(data: NewTaskFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const newTaskData: NewTasData = {
        id: crypto.randomUUID(),
        name: data.taskName,
        status: "pending",
        createdAt: new Date(),
      };

      newTaskFn(newTaskData);
      toast.success("Tarefa Cadastrada com suceso!");
    } catch {
      toast.error("Erro ao Cadastrar Tarefa!", {
        action: {
          label: "Tentar Novamente",
          onClick: () => {
            handleNewTask(data);
          },
        },
      });
    }
  }

  return (
    <DialogContent>
      <Logo />

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleNewTask)}
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
                <Loader className="w-4 h-4 animate-spin" />
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
