import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="w-[430px] flex gap-3 p-3 rounded-[20px] border border-white/10 bg-gray-900">
      <div className="size-24 rounded-lg overflow-hidden shrink-0">
        <Image
          className="object-cover w-full h-full"
          src="/project1.jpg"
          alt="Project image"
          width={96}
          height={96}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-green-600">
          10 clicks
        </span>

        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">Project One</span>

          <span className="text-sm">
            A detailed description about the project
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
