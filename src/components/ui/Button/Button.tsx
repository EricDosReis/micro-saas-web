import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  as?: "button" | "span";
  full?: boolean;
  variant?: "primary" | "secondary" | "dashed" | "ghost";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  as = "button",
  full,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const Component = as;

  return (
    <Component
      {...props}
      className={cn(
        "flex items-center justify-center p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-80 disabled:opacity-70 hover:cursor-pointer disabled:cursor-not-allowed",
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
    </Component>
  );
};

export { Button };
