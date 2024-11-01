import { app_navigations } from "@/config/navigations";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useLocation, Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex flex-row justify-between items-center gap-2">
        <p>App</p>
        <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {app_navigations.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={item.url === pathname} asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
