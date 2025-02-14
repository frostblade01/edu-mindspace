
import { Home, MessageSquare, Calendar, BookOpen, Users } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/student-dashboard",
  },
  {
    title: "AI Chat Assistant",
    icon: MessageSquare,
    url: "/student-dashboard/chat",
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "/student-dashboard/calendar",
  },
  {
    title: "Forum",
    icon: Users,
    url: "/student-dashboard/forum",
  },
  {
    title: "Wellness Hub",
    icon: BookOpen,
    url: "/student-dashboard/wellness",
  },
];

export default function StudentDashboard() {
  return (
    <DashboardLayout menuItems={menuItems} role="student">
      <div className="space-y-8 animate-fade-in">
        <h1 className="text-4xl font-bold">Welcome Back, Student!</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard content will go here */}
        </div>
      </div>
    </DashboardLayout>
  );
}
