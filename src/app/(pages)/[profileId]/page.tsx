import { ProjectCard } from "@/components/commons/ProjectCard";
import { TotalVisits } from "@/components/commons/TotalVisits";
import { UserCard } from "@/components/commons/UserCard";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: { profileId: string };
}) {
  const { profileId } = await params;

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-2 py-2 bg-gray-800">
        <p>You are using a trial version.</p>

        <Link href={`/${profileId}/upgrade`}>
          <button className="cursor-pointer text-green-600 font-bold">
            Upgrade your plan now!
          </button>
        </Link>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center h-min gap-4">
        <UserCard />

        <TotalVisits />
      </div>

      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <Button
          className="flex gap-2 justify-center items-center min-w-[340px]"
          variant="dashed"
        >
          <Plus className="size-10" />

          <span className="text-lg">New project</span>
        </Button>
      </div>
    </div>
  );
}
