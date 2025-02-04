import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const filterScheme = z.object({
  name: z.string(),
  status: z.enum(["pending", "in-progress", "completed", "canceled"]),
});

type FilterFormData = z.infer<typeof filterScheme>;

export function TaskTableFilter() {
  const { register, control, handleSubmit } = useForm<FilterFormData>();

  async function handleFilter(data: FilterFormData) {
    console.log(data);
  }
  return (
    <form
      className="flex items-center gap-2 w-fit"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span>Filtros:</span>

      <Input type="text" placeholder="Nome da tarefa" {...register("name")} />

      <Controller
        control={control}
        name="status"
        render={({ field }) => {
          return (
            <Select defaultValue="all" onValueChange={field.onChange}>
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="in-progress">Em progresso</SelectItem>
                <SelectItem value="completed">Concluída</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
              </SelectContent>

              <Button type="submit" variant="secondary" size="xl">
                <Search className="h-4 w-4 mr-1" />
                Aplicar filtos
              </Button>

              <Button type="reset" variant="ghost" size="xl">
                <X className="h-4 w-4 mr-1" />
                Remover
              </Button>
            </Select>
          );
        }}
      />
    </form>
  );
}
