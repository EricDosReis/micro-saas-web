import { Header } from "@/components/landing-page/Header";
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { Rocket } from "lucide-react";

export default function CreatePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Choose your link</h1>

          <Rocket className="size-10" />
        </div>

        <form action="" className="w-full flex flex-col gap-4">
          <div className="w-full flex items-center gap-2">
            <span className="text-white text-xl">myprojects.com/</span>

            <TextInput placeholder="Your link" />

            <Button>Create now</Button>
          </div>

          <span className="text-red-400 text-center">Error example</span>
        </form>
      </div>
    </div>
  );
}
