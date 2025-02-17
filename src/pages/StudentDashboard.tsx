import { 
  Home, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Users, 
  Video, 
  Bell,
  Clock,
  Laptop,
  Star,
  CheckCircle
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

const upcomingMeetings = [
  { id: 1, title: "Mathematics Class", teacher: "Mrs. Smith", time: "10:00 AM", date: "Today", subject: "Mathematics", status: "Starting Soon", joinLink: "#" },
  { id: 2, title: "Physics Lab", teacher: "Mr. Johnson", time: "2:00 PM", date: "Tomorrow", subject: "Physics", status: "Scheduled", joinLink: "#" },
  { id: 3, title: "Study Group", teacher: "Peer Learning", time: "4:00 PM", date: "Tomorrow", subject: "Group Study", status: "Scheduled", joinLink: "#" },
];

const recentMessages = [
  { id: 1, from: "Mrs. Smith", message: "Don't forget about tomorrow's test!", time: "1 hour ago", avatar: "👩‍🏫", priority: "high" },
  { id: 2, from: "John Doe", message: "Hey, can you help me with the homework?", time: "2 hours ago", avatar: "👨‍🎓", priority: "medium" },
  { id: 3, from: "Study Group", message: "Meeting confirmed for tomorrow", time: "3 hours ago", avatar: "👥", priority: "normal" },
];

const notifications = [
  { id: 1, title: "New Assignment Posted", description: "Mathematics - Chapter 5 Problems", time: "30 mins ago", type: "assignment", status: "new" },
  { id: 2, title: "Meeting Reminder", description: "Physics Lab at 2:00 PM", time: "1 hour ago", type: "meeting", status: "urgent" },
  { id: 3, title: "Wellness Check", description: "Complete your daily wellness check", time: "2 hours ago", type: "wellness", status: "pending" },
];

const wellnessResources = [
  { id: 1, title: "Mindfulness Session", type: "Meditation", duration: "15 min", category: "Mental Health", status: "Recommended" },
  { id: 2, title: "Stress Management", type: "Article", duration: "5 min read", category: "Self-Help", status: "New" },
  { id: 3, title: "Study Break Exercise", type: "Activity", duration: "10 min", category: "Physical Health", status: "Popular" },
];

const upcomingDeadlines = [
  { id: 1, title: "Physics Assignment", due: "Tomorrow", subject: "Physics", priority: "High", progress: 75 },
  { id: 2, title: "Math Quiz", due: "In 2 days", subject: "Mathematics", priority: "Medium", progress: 50 },
  { id: 3, title: "Literature Essay", due: "Next Week", subject: "English", priority: "Low", progress: 25 },
];

export default function StudentDashboard() {
  const { toast } = useToast();

  return (
    <DashboardLayout menuItems={menuItems} role="student">
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Welcome Back, Student!
            </h1>
            <p className="text-blue-300 mt-2">Here's your learning summary for today</p>
          </div>
          <Button 
            variant="outline" 
            className="relative border-blue-500/30 bg-slate-900/80 hover:bg-blue-900/30"
            onClick={() => toast({
              title: "Notifications",
              description: "You have 3 new notifications",
            })}
          >
            <Bell className="h-5 w-5 text-blue-400" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs text-slate-900 flex items-center justify-center font-semibold">
              3
            </span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="dark-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <Video className="h-6 w-6" />
                Upcoming Meetings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div 
                  key={meeting.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-900/90 border border-blue-500/20 hover:border-blue-400 dark-hover"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-blue-300">{meeting.title}</p>
                      {meeting.status === "Starting Soon" && (
                        <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">
                          Starting Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-blue-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {meeting.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Laptop className="h-4 w-4" />
                        {meeting.subject}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-blue-100 border-none"
                  >
                    Join
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="dark-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id}
                  className="p-4 rounded-lg bg-slate-900/90 border border-blue-500/20 dark-hover space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{message.avatar}</span>
                      <div>
                        <p className="font-medium text-blue-300">{message.from}</p>
                        <span className="text-xs text-blue-400">{message.time}</span>
                      </div>
                    </div>
                    {message.priority === "high" && (
                      <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">
                        High Priority
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-blue-200 pl-9">{message.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="dark-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <Bell className="h-6 w-6" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="p-4 rounded-lg bg-slate-900/90 border border-blue-500/20 dark-hover space-y-2"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-blue-300">{notification.title}</p>
                        {notification.status === "new" && (
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                            New
                          </span>
                        )}
                        {notification.status === "urgent" && (
                          <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-blue-200">{notification.description}</p>
                    </div>
                    <span className="text-xs text-blue-400">{notification.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="dark-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Wellness Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {wellnessResources.map((resource) => (
                <div 
                  key={resource.id}
                  className="p-4 rounded-lg bg-slate-900/90 border border-blue-500/20 dark-hover"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-blue-300">{resource.title}</p>
                        {resource.status === "New" && (
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">
                            New
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-blue-400">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.category}</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      resource.status === "Recommended" 
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/20" 
                        : resource.status === "New"
                        ? "bg-green-500/20 text-green-300 border-green-500/20"
                        : "bg-red-500/20 text-red-300 border-red-500/20"
                    }`}>
                      {resource.duration}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="dark-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div 
                  key={deadline.id}
                  className="p-4 rounded-lg bg-slate-900/90 border border-blue-500/20 dark-hover"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-blue-300">{deadline.title}</p>
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                          <span>{deadline.subject}</span>
                          <span>•</span>
                          <span>{deadline.due}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full border ${
                        deadline.priority === "High" 
                          ? "bg-red-500/20 text-red-300 border-red-500/20" 
                          : deadline.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/20"
                          : "bg-blue-500/20 text-blue-300 border-blue-500/20"
                      }`}>
                        {deadline.priority} Priority
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${deadline.progress}%` }}
                      />
                    </div>
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
