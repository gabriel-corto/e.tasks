interface SeparatorProps {
  legend: string;
}

export function Separator({ legend }: SeparatorProps) {
  return <span className="text-md text-neutral-400">{legend}</span>;
}
