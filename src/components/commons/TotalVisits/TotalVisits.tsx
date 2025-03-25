import { TrendingUp } from "lucide-react";

const TotalVisits = () => {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-gray-800 border border-gray-700 px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white">Total of visits</span>

      <div className="flex items-center gap-2 text-green-600">
        <span className="text-3xl font-bold">54321</span>

        <TrendingUp />
      </div>

      {/* <div className="flex items-center gap-2">
        <Button>Portal</Button>
        <Button>Sair</Button>
      </div> */}
    </div>
  );
};

export { TotalVisits };
