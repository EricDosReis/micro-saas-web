import Link from "next/link";

type UpgradePlanProps = {
  profileId: string;
};

const UpgradePlan = ({ profileId }: UpgradePlanProps) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-2 py-2 bg-gray-800">
      <p>You are using a trial version.</p>

      <Link href={`/${profileId}/upgrade`}>
        <span className="cursor-pointer text-green-600 font-bold">
          Upgrade your plan now!
        </span>
      </Link>
    </div>
  );
};

export { UpgradePlan };
