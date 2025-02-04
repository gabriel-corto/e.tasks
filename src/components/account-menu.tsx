import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AccountMenu() {
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback className="bg-neutral-800  font-bold">
          GF
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
