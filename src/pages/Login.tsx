
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen, GraduationCap } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (role: "student" | "teacher", event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Navigate to appropriate dashboard
      navigate(role === "student" ? "/student-dashboard" : "/teacher-dashboard");
      
      toast({
        title: "Success!",
        description: `Welcome back! You've been logged in as a ${role}.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-lg mx-auto glass dark:glass-dark animate-fade-in">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">EduBalance</CardTitle>
          <CardDescription>
            Sign in to access your educational portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="student" className="space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger value="teacher" className="space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Teacher</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={(e) => handleLogin("student", e)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Student ID</Label>
                  <Input id="student-email" placeholder="Enter your student ID" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input id="student-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="teacher">
              <form onSubmit={(e) => handleLogin("teacher", e)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-email">Email</Label>
                  <Input id="teacher-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher-password">Password</Label>
                  <Input id="teacher-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
