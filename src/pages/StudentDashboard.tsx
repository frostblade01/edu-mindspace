
import { 
  Home, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Users, 
  Video, 
  Bell
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/student-dashboard",
  },
  {
    title: "Meetings",
    icon: Video,
    url: "/student-dashboard/meetings",
  },
  {
    title: "Chat",
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

// Simulated data - In a real app, this would come from an API
const upcomingMeetings = [
  { id: 1, title: "Mathematics Class", teacher: "Mrs. Smith", time: "10:00 AM", date: "Today" },
  { id: 2, title: "Physics Lab", teacher: "Mr. Johnson", time: "2:00 PM", date: "Tomorrow" },
];

const recentMessages = [
  { id: 1, from: "Mrs. Smith", message: "Don't forget about tomorrow's test!", time: "1 hour ago" },
  { id: 2, from: "John Doe", message: "Hey, can you help me with the homework?", time: "2 hours ago" },
];

const notifications = [
  { id: 1, title: "New Assignment Posted", description: "Mathematics - Chapter 5 Problems", time: "30 mins ago" },
  { id: 2, title: "Meeting Reminder", description: "Physics Lab at 2:00 PM", time: "1 hour ago" },
];

export default function StudentDashboard() {
  const { toast } = useToast();

  return (
    <DashboardLayout menuItems={menuItems} role="student">
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-100">Welcome Back, Student!</h1>
          <Button 
            variant="outline" 
            className="relative"
            onClick={() => toast({
              title: "Notifications",
              description: "You have 2 new notifications",
            })}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs text-white flex items-center justify-center">
              2
            </span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Upcoming Meetings Card */}
          <Card className="bg-gray-900/50 border-blue-500/20 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-100">Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div 
                  key={meeting.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 border border-blue-500/10"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-blue-100">{meeting.title}</p>
                    <p className="text-sm text-blue-200/70">
                      {meeting.teacher} • {meeting.time}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10">
                    Join
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Messages Card */}
          <Card className="bg-gray-900/50 border-blue-500/20 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-100">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id}
                  className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/10 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-blue-100">{message.from}</p>
                    <span className="text-xs text-blue-200/70">{message.time}</span>
                  </div>
                  <p className="text-sm text-blue-200/90">{message.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications Card */}
          <Card className="bg-gray-900/50 border-blue-500/20 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-100">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="p-3 rounded-lg bg-gray-800/50 border border-blue-500/10 space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-blue-100">{notification.title}</p>
                    <span className="text-xs text-blue-200/70">{notification.time}</span>
                  </div>
                  <p className="text-sm text-blue-200/90">{notification.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
