import { notFound } from "next/navigation";

import { getProfile } from "@/app/actions/get-profile";
import { getProfileProjects } from "@/app/actions/get-profile-projects";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";
import { CreateProject } from "@/components/commons/CreateProject";
import { ProjectCard } from "@/components/commons/ProjectCard";
import { TotalVisits } from "@/components/commons/TotalVisits";
import { UpgradePlan } from "@/components/commons/UpgradePlan";
import { UserCard } from "@/components/commons/UserCard";
import { auth } from "@/lib/auth";
import { normalizeLink } from "@/lib/formatters";
import { getFileURL } from "@/lib/storage";

type ProfilePageProps = {
  params: Promise<{ profileId: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params;
  const profile = await getProfile(profileId);

  if (!profile) {
    return notFound();
  }

  const projects = await getProfileProjects(profileId);

  const session = await auth();
  const isOwner = profile.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId);
  }

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      {isOwner && <UpgradePlan profileId={profileId} />}

      <div className="w-1/2 flex flex-col justify-center items-center h-min gap-4">
        <UserCard
          profile={profile}
          imageURL={(await getFileURL(profile.imagePath)) as string}
          isOwner={isOwner}
        />

        {isOwner && <TotalVisits visits={profile.totalVisits || 0} />}
      </div>

      <div className="w-full flex justify-center items-stretch content-start gap-4 flex-wrap overflow-y-auto">
        {projects.map(async (project) => (
          <ProjectCard
            key={project.name}
            imageURL={(await getFileURL(project.imagePath)) as string}
            isOwner={isOwner}
            project={{
              ...project,
              url: normalizeLink(project.url),
            }}
          />
        ))}

        {isOwner && <CreateProject profileId={profileId} />}
      </div>
    </div>
  );
}
