import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  full?: boolean;
  variant?: "primary" | "secondary" | "dashed" | "ghost";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  full,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-80 disabled:opacity-70 hover:cursor-pointer",
        variant === "primary" && "bg-purple-500",
        variant === "secondary" && "bg-gray-700",
        variant === "dashed" &&
          "border border-dashed border-gray-500 text-gray-500",
        variant === "ghost" && "bg-transparent border-0",
        full && "w-full",
        props.className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
