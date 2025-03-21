import { cn } from "@/lib/utils";

type TextInput = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = (
  props: TextInput
) => {
  return (
    <input
      {...props}
      className={cn(
        `w-full p-3 bg-zinc-800 rounded-xl
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}
    />
  );
}

export { TextInput };
