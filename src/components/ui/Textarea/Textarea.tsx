import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = (
  props: TextareaProps
) => {
  return (
    <textarea
      {...props}
      className={cn(
        `w-full p-3 bg-zinc-700 text-white placeholder:text-content-placeholder rounded-xl
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}
    />
  );
}

export { Textarea }
