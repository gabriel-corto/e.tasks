import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const newTaskScheme = z.object({
  taskName: z.string().min(5, "Porfavor insira uma tarefa válida!"),
});

type NewTaskFormData = z.infer<typeof newTaskScheme>;

export function NewNoteDialog() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskScheme),
  });

  async function handleNewTask(data: NewTaskFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
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
