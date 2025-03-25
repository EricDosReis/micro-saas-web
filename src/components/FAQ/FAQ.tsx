import { TRIAL_DAYS } from "@/constants";
import { FAQItem } from "./FAQItem";

const faqItems = [
  {
    title: "How does portfolio and link creation work with MyProjects?",
    description:
      "With MyProjects, you can create a professional portfolio and a link page in just a few minutes. Our platform offers customizable templates and an easy-to-use interface so you can showcase your work and organize your links efficiently.",
  },
  {
    title: "Is there a free trial period?",
    description: `Yes! We offer a ${TRIAL_DAYS}-day free trial with no commitment. This allows you to explore all the features of our platform before deciding on a subscription.`,
  },
  {
    title: "Can I customize my portfolio design?",
    description:
      "Yes! With MyProjects, you can customize colors, fonts, and the layout of your portfolio, ensuring it reflects your personal brand.",
  },
  {
    title: "Do I need technical skills to use the platform?",
    description:
      "No! Our platform was designed to be simple and intuitive, so no technical knowledge is required. You can create and customize your portfolio and links without any hassle.",
  },
  {
    title: "What happens if I cancel my subscription?",
    description:
      "You can cancel your subscription at any time. Your portfolio and link page will remain available until the end of the paid period, but after that, premium features will be deactivated.",
  },
  {
    title: "Can I share my portfolio on social media?",
    description:
      "Yes! You can easily share your portfolio and link page on your social media through a personalized link.",
  },
];

const FAQ = () => {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">FAQ</h3>

      <div className="flex gap-3">
        <div className="flex flex-col gap-4">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { FAQ };
