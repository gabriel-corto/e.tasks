export function Logo() {
  return (
    <header className="flex items-center">
      <img
        src="/logo.png"
        alt="Imagem De Agenda de Notas Pessoais"
        className="w-16"
      />
      <strong className="font-extrabold text-xl text-violet-700 tracking-tight">
        e.tasks
      </strong>
    </header>
  );
}
