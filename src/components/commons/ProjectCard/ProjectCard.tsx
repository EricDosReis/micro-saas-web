import type { ProfileProjectData } from "@/app/actions/get-profile-projects";
import Link from "next/link";

type ProjectCardProps = {
  imageURL: string;
} & Pick<ProfileProjectData, "name" | "description" | "url" | "totalVisits">;

const ProjectCard = async ({
  name,
  description,
  url,
  imageURL,
  totalVisits,
}: ProjectCardProps) => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="w-[360px] flex gap-3 p-3 rounded-[20px] border border-white/10 bg-gray-900">
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
