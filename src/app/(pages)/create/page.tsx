import { Header } from "@/components/landing-page/Header";
import { Rocket } from "lucide-react";
import { CreateLinkForm } from "./components/CreateLinkForm";

export default function CreatePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Choose your link</h1>

          <Rocket className="size-10" />
        </div>

        <CreateLinkForm />
      </div>
    </div>
  );
}
