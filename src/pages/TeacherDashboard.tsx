
import { Home, Users, Calendar, ClipboardList, BookOpen } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/teacher-dashboard",
  },
  {
    title: "Attendance",
    icon: ClipboardList,
    url: "/teacher-dashboard/attendance",
  },
  {
    title: "Class Insights",
    icon: Users,
    url: "/teacher-dashboard/insights",
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "/teacher-dashboard/calendar",
  },
  {
    title: "Activity Builder",
    icon: BookOpen,
    url: "/teacher-dashboard/activities",
  },
];

export default function TeacherDashboard() {
  return (
    <DashboardLayout menuItems={menuItems} role="teacher">
      <div className="space-y-8 animate-fade-in">
        <h1 className="text-4xl font-bold">Welcome Back, Teacher!</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard content will go here */}
        </div>
      </div>
    </DashboardLayout>
  );
}
