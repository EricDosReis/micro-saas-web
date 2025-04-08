import Link from "next/link";
import { notFound } from "next/navigation";

import { getProfile } from "@/app/actions/get-profile";
import { getProfileProjects } from "@/app/actions/get-profile-projects";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";
import { CreateProject } from "@/components/commons/CreateProject";
import { ProjectCard } from "@/components/commons/ProjectCard";
import { TotalVisits } from "@/components/commons/TotalVisits";
import { UserCard } from "@/components/commons/UserCard";
import { auth } from "@/lib/auth";
import { normalizeLink } from "@/lib/formatters";
import { getFileURL } from "@/lib/storage";

type ProfilePageProps = {
  params: Promise<{ profileId: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileId } = await params;
  const profileData = await getProfile(profileId);

  if (!profileData) {
    return notFound();
  }

  const projects = await getProfileProjects(profileId);

  const session = await auth();
  const isOwner = profileData.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId);
  }

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-2 py-2 bg-gray-800">
        <p>You are using a trial version.</p>

        <Link href={`/${profileId}/upgrade`} rel="noopener noreferrer">
          <span className="cursor-pointer text-green-600 font-bold">
            Upgrade your plan now!
          </span>
        </Link>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center h-min gap-4">
        <UserCard profileData={profileData} isOwner={isOwner} />

        {isOwner && <TotalVisits visits={profileData.totalVisits || 0} />}
      </div>

      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        {projects.map(
          async ({ name, description, url, imagePath, totalVisits }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              url={normalizeLink(url)}
              imageURL={(await getFileURL(imagePath)) as string}
              totalVisits={totalVisits}
            />
          )
        )}

        {isOwner && <CreateProject profileId={profileId} />}
      </div>
    </div>
  );
}
