import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const filterScheme = z.object({
  name: z.string(),
  status: z.enum(["pending", "in-progress", "completed", "canceled"]),
});

type FilterFormData = z.infer<typeof filterScheme>;

export function TaskTableFilter() {
  const { register, control, handleSubmit, reset } = useForm<FilterFormData>();

  const navigate = useNavigate();

  async function handleFilter(data: FilterFormData) {
    const searchParams = new URLSearchParams();

    data.name && searchParams.set("q", data.name);
    data.status && searchParams.set("status", data.status);

    navigate(`?${searchParams.toString()}`);
  }

  function hanleRemoveFilter() {
    navigate("");
  }
  return (
    <form
      className="flex items-center gap-2 w-full"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span>Filtros:</span>

      <div className="flex items-center gap-1 text-foreground/80">
        <Label>Nome</Label>
        <Input type="text" className="h-9" {...register("name")} />
      </div>

      <div className="flex items-center gap-1 text-foreground/80">
        <Label>Status</Label>
      </div>

      <Controller
        control={control}
        name="status"
        render={({ field }) => {
          return (
            <Select defaultValue="" onValueChange={field.onChange}>
              <SelectTrigger className="h-9 w-[180px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="in-progress">Em progresso</SelectItem>
                <SelectItem value="completed">Concluída</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />

      <Button type="submit" variant="secondary" size="xl">
        <Search className="h-4 w-4 mr-1" />
        Aplicar filtos
      </Button>

      <Button
        type="reset"
        variant="ghost"
        onClick={() => {
          hanleRemoveFilter();
        }}
      >
        <X className="h-4 w-4 mr-1" />
        Remover
      </Button>
    </form>
  );
}
