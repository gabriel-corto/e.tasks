interface SeparatorProps {
  legend: string;
}

export function Separator({ legend }: SeparatorProps) {
  return <span className="text-sm text-foreground/80">{legend}</span>;
}
