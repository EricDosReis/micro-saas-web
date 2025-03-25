import { Play } from "lucide-react";

const VideoExplanation = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[800px] rounded-xl bg-gray-800 border border-white/10 aspect-video flex items-center justify-center my-20 hover:cursor-pointer">
        <Play className="text-purple-500 size-16" />
      </div>
    </section>
  );
};

export { VideoExplanation };
