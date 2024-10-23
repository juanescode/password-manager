import { getServerSession } from "next-auth";
import { ImageAuth } from "./components/ImageAuth";
import { TabsForms } from "./components/TabsForms";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex justify-center h-full max-h-screen overflow-hidden">
      <div className="flex justify-center h-full">
        <div className="text-white flex flex-col items-center justify-center p-6">
          <h1 className="text-slate-600 text-2xl text-center mb-5 font-medium">
            Passwords
          </h1>
          <h2 className="text-4xl font-medium text-black">Welcome back</h2>
          <TabsForms />
        </div>
      </div>
      {/* <ImageAuth /> */}
    </div>
  );
}
