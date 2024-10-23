import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";

export function TabsForms() {
  return (
    <Tabs defaultValue="signin" className="w-[350px] md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2 gap-2">
        <TabsTrigger
          value="signin"
          className="text-slate-800 hover:bg-slate-600 "
        >
          Sign in
        </TabsTrigger>
        <TabsTrigger
          value="signup"
          className="text-slate-800 hover:bg-slate-600 "
        >
          Signup
        </TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardContent className="space-y-2">
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardContent className="space-y-2">
            <RegisterForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
