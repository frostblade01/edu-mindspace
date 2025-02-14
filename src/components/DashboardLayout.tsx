
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  menuItems: {
    title: string;
    icon: any;
    url: string;
  }[];
  role: "student" | "teacher";
}

export default function DashboardLayout({ children, menuItems, role }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-900">
        <Sidebar>
          <SidebarHeader className="p-4">
            <h2 className="text-lg font-semibold">EduBalance</h2>
            <p className="text-sm text-muted-foreground capitalize">{role} Portal</p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => navigate(item.url)}
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <div className="mt-auto p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Sidebar>
        <main className="flex-1 p-8">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
