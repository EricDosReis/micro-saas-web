import { Button } from "@/components/ui/Button";
import { TRIAL_DAYS } from "@/constants";

const Pricing = () => {
  return (
    <section className="my-[150px] flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">
          An essential tool for very low
        </h3>

        <p className="text-xl">
          Join the community of pro creators already leveling up their <br />{" "}
          online presence. Try it free for{" "}
          <strong className="text-green-600">{TRIAL_DAYS} days</strong>, no
          strings attached!
        </p>
      </div>

      <div className="flex items-end gap-9">
        <div className="flex flex-col">
          <div className="w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-white/10">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">Monthly</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[48px]">$4.90</span>
              <span className="text-2xl">/monthly</span>
            </div>

            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-t-2xl p-2 w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
            <span className="uppercase text-xs font-bold">Recommended</span>
          </div>

          <div className="p-[2px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
            <div className="w-full bg-gray-900 p-8 flex flex-col gap-7 rounded-t-md rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Forever</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-white font-bold text-[48px]">$99.90</span>
              </div>

              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
