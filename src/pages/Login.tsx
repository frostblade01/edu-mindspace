
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black to-blue-950 p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Card className="w-full max-w-lg mx-auto relative bg-slate-950/60 border-blue-500/20 shadow-xl backdrop-blur-xl animate-fade-in">
        <CardHeader className="space-y-1 text-center pb-8">
          <CardTitle className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            EduBalance
          </CardTitle>
          <CardDescription className="text-blue-300">
            Sign in to access your educational portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/50">
              <TabsTrigger 
                value="student" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Student
              </TabsTrigger>
              <TabsTrigger 
                value="teacher"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Teacher
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <form onSubmit={(e) => handleLogin("student", e)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email" className="text-blue-300">Student ID</Label>
                  <Input 
                    id="student-email" 
                    placeholder="Enter your student ID" 
                    required 
                    className="bg-slate-900/50 border-blue-500/20 text-blue-100 placeholder:text-blue-300/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password" className="text-blue-300">Password</Label>
                  <Input 
                    id="student-password" 
                    type="password" 
                    required 
                    className="bg-slate-900/50 border-blue-500/20 text-blue-100"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors" 
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="teacher">
              <form onSubmit={(e) => handleLogin("teacher", e)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-email" className="text-blue-300">Email</Label>
                  <Input 
                    id="teacher-email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="bg-slate-900/50 border-blue-500/20 text-blue-100 placeholder:text-blue-300/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher-password" className="text-blue-300">Password</Label>
                  <Input 
                    id="teacher-password" 
                    type="password" 
                    required 
                    className="bg-slate-900/50 border-blue-500/20 text-blue-100"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors" 
                  disabled={loading}
                >
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
