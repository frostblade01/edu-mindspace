
import { Home, Users, Calendar, ClipboardList, BookOpen } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <h1 className="text-4xl font-bold text-white">
          Welcome Back, Teacher!
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-slate-900 border-blue-600/20 shadow-xl hover:border-blue-600/30 transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-500">
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Dashboard content coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
