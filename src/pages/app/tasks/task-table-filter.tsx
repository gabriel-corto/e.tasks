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

export function TaskTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span>Filtros:</span>

      <Input type="text" placeholder="Nome da tarefa" />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
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

        <Button type="button" variant="ghost" size="xl">
          <X className="h-4 w-4 mr-1" />
          Remover
        </Button>
      </Select>
    </form>
  );
}
