type FAQItemProps = {
  title: string;
  description: string;
};

const FAQItem = ({ title, description }: FAQItemProps) => {
  return (
    <div className="w-[360px] h-min flex flex-col gap-4 p-5 rounded-2xl border borber border-white/10 bg-gray-900">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export { FAQItem };
