import { ArrowDownLeftFromCircle, House } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { Separator } from "./separator";
import { ThemeToggle } from "./themes/theme-toggle";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-10">
      <Logo />

      <div className="flex flex-col gap-5">
        <Separator legend="Navegação" />

        <nav className="flex flex-col gap-8 px-2">
          <Link
            to="/"
            className="flex items-center gap-1 transition-all font-semibold text-foreground/60 p-2 rounded-lg hover:bg-violet-600/20 hover:text-violet-600"
          >
            <House className="w-6 h-6" />
            <span>Início</span>
          </Link>
          <Link
            to="/tasks"
            className="flex items-center gap-1 transition-all font-semibold text-foreground/60 p-2 rounded-lg hover:bg-violet-600/20 hover:text-violet-600"
          >
            <ArrowDownLeftFromCircle className="w-6 h-6" />
            <span>Tarefas</span>
          </Link>
        </nav>

        <div className="mt-8 flex flex-col gap-6">
          <Separator legend="Estilo da aplicação" />
          <div className="px-5 flex items-center gap-2 text-foreground/60 font-semibold">
            <ThemeToggle />
            <span>Tema</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
