import { Header } from "@/components/landing-page/Header";
import { Button } from "@/components/ui/Button";

export default async function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />

      <h2 className="text-3xl font-bold">Choose your plan</h2>

      <div className="flex gap-4">
        <Button>$4.90 / monthly</Button>

        <Button>$99.90 lifetime access</Button>
      </div>
    </div>
  );
}
