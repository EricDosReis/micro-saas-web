import { manageAuth } from "@/app/actions/manage-auth";
import { Button } from "@/components/ui/Button";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Header = async () => {
  const session = await auth();

  return (
    <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="MyProjects logo" width={27} height={32} />
        <h1 className="text-white text-2xl font-bold">MyProjects</h1>
      </div>

      <div className="flex items-center gap-4">
        {session && <Button>My page</Button>}

        <form action={manageAuth}>
          <Button variant="ghost">{session ? "Logout" : "Login"}</Button>
        </form>
      </div>
    </header>
  );
};

export { Header };
