"use client";

import Link from "next/link";

import type { ProfileProjectData } from "@/app/actions/get-profile-projects";
import { increaseProjectVisits } from "@/app/actions/increase-project-visits";

type ProjectCardProps = {
  imageURL: string;
  isOwner: boolean;
  project: Pick<
    ProfileProjectData,
    "id" | "name" | "description" | "url" | "profileId" | "totalVisits"
  >;
};

const ProjectCard = ({ project, imageURL, isOwner }: ProjectCardProps) => {
  const { id, name, description, url, profileId, totalVisits } = project;

  const handleClick = async () => {
    if (isOwner) {
      return;
    }

    await increaseProjectVisits(profileId, id);
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex"
    >
      <div className="w-[360px] h-full flex gap-3 p-3 rounded-[20px] border border-white/10 bg-gray-900">
        <div className="size-24 rounded-lg overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover w-full h-full"
            src={imageURL}
            alt={`${name} image`}
            width={96}
            height={96}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase text-xs font-bold text-green-600">
            {totalVisits || 0} clicks
          </span>

          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">{name}</span>

            <span className="text-sm">{description}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
