
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
  { id: 3, title: "Study Group", teacher: "Peer Learning", time: "4:00 PM", date: "Tomorrow" },
];

const recentMessages = [
  { id: 1, from: "Mrs. Smith", message: "Don't forget about tomorrow's test!", time: "1 hour ago" },
  { id: 2, from: "John Doe", message: "Hey, can you help me with the homework?", time: "2 hours ago" },
  { id: 3, from: "Study Group", message: "Meeting confirmed for tomorrow", time: "3 hours ago" },
];

const notifications = [
  { id: 1, title: "New Assignment Posted", description: "Mathematics - Chapter 5 Problems", time: "30 mins ago" },
  { id: 2, title: "Meeting Reminder", description: "Physics Lab at 2:00 PM", time: "1 hour ago" },
  { id: 3, title: "Wellness Check", description: "Complete your daily wellness check", time: "2 hours ago" },
];

const wellnessResources = [
  { id: 1, title: "Mindfulness Session", type: "Meditation", duration: "15 min" },
  { id: 2, title: "Stress Management", type: "Article", duration: "5 min read" },
  { id: 3, title: "Study Break Exercise", type: "Activity", duration: "10 min" },
];

const upcomingDeadlines = [
  { id: 1, title: "Physics Assignment", due: "Tomorrow", subject: "Physics" },
  { id: 2, title: "Math Quiz", due: "In 2 days", subject: "Mathematics" },
  { id: 3, title: "Literature Essay", due: "Next Week", subject: "English" },
];

export default function StudentDashboard() {
  const { toast } = useToast();

  return (
    <DashboardLayout menuItems={menuItems} role="student">
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Welcome Back, Student!
          </h1>
          <Button 
            variant="outline" 
            className="relative border-blue-500/30 hover:bg-blue-500/10"
            onClick={() => toast({
              title: "Notifications",
              description: "You have 3 new notifications",
            })}
          >
            <Bell className="h-5 w-5 text-blue-400" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Upcoming Meetings Card */}
          <Card className="bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Upcoming Meetings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div 
                  key={meeting.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/30 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-white">{meeting.title}</p>
                    <p className="text-sm text-blue-300">
                      {meeting.teacher} • {meeting.time}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-500/30 hover:bg-blue-600 text-blue-400 hover:text-white transition-colors">
                    Join
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Messages Card */}
          <Card className="bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id}
                  className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/30 transition-colors space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-white">{message.from}</p>
                    <span className="text-xs text-blue-300">{message.time}</span>
                  </div>
                  <p className="text-sm text-blue-200">{message.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications Card */}
          <Card className="bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/30 transition-colors space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-white">{notification.title}</p>
                    <span className="text-xs text-blue-300">{notification.time}</span>
                  </div>
                  <p className="text-sm text-blue-200">{notification.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Wellness Resources */}
          <Card className="bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Wellness Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {wellnessResources.map((resource) => (
                <div 
                  key={resource.id}
                  className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-white">{resource.title}</p>
                      <p className="text-sm text-blue-300">{resource.type}</p>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                      {resource.duration}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div 
                  key={deadline.id}
                  className="p-3 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-white">{deadline.title}</p>
                      <p className="text-sm text-blue-300">{deadline.subject}</p>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                      {deadline.due}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
