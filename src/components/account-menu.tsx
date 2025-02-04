import { DropdownMenuSubContent } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function AccountMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer border-2">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback className="bg-muted  font-bold">GF</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="flex flex-col gap-2 text-foreground/80"
          align="start"
        >
          <span className="text-sm">Developed By:</span>
          <span className="text-sm">Gabriel Francisco</span>
          <DropdownMenuSeparator />
          <span className="text-sm">e.tasks - {new Date().getFullYear()}</span>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
