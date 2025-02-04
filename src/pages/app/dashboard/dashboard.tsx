import { Toolbar } from "@/components/toolbar";
import { House } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div>
        <Toolbar children={<House />} title="Dashboard" />

        <div className="mt-20">
          <div className="flex gap-1 items-center justify-center flex-col">
            <img
              src="/empty.png"
              alt="Imagem de uma mulher mexendo no computador"
              className="w-96"
            />
            <strong className="text-foreground/70">
              Ops! Parece que não cadastrou nenhuma tarefa
            </strong>
            <span className="text-foreground/80">
              Cadastre uma, e organize-as
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
