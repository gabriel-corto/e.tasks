import { Button } from "@/components/ui/button";
import { ArrowLeftCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="h-screen w-full flex gap-8 items-center justify-center">
      <strong className="text-8xl font-extrabold text-primary">404</strong>

      <div className="flex flex-col gap-4">
        <h1 className="text-foreground/80 text-4xl font-bold">
          Página não encontrada
        </h1>
        <p className="text-xl">Ops! Não conseguimos encontrar essa página</p>

        <Button className="w-fit">
          <Link to="/" className="flex items-center gap-2 text-white">
            <ArrowLeftCircleIcon className="w-4 h-5" />
            <span>Voltar Para Dashboard</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
