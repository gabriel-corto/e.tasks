import { AccountMenu } from "@/components/account-menu";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="h-screen antialiased flex gap-10">
      <div className="h-full p-10 border-r-2 flex flex-col justify-between w-fit px-10">
        <Sidebar />
        <AccountMenu />
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}
