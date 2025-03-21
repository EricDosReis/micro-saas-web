import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";
import { UserCard } from "@/components/commons/UserCard";


const Hero = () => {
  return (
    <section className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Your projects and social media in one link
        </h1>

        <h2 className="text-xl leading-6">
          Create your own project&apos;s page and share it with the world.
          <br />
          Track engagement with analytical insights.
        </h2>

        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>

          <TextInput placeholder="Your link" />

          <Button>Create now</Button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#453870,transparent_55%)]">
        <div className="relative">
          <UserCard />

          <div className="absolute -bottom-[7%] -right-[45%]">
            {/* <TotalVisits /> */}
          </div>

          <div className="absolute top-[20%] -left-[45%] -z-10">
            {/* <ProjectCard /> */}
          </div>

          <div className="absolute -top-[5%] -left-[55%] -z-10">
            {/* <ProjectCard /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero };
