import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";

export default function ProtectedLayout() {
  const { pathname } = useLocation();
  const page_name = pathname.slice(1)
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <header className="flex items-center gap-1">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 !shrink-0 !w-px bg-border"
            />
            <h1 className="capitalize text-sm">{page_name.trim() ? page_name : "Dashboard"}</h1>
          </header>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
