import { ArrowUpFromLine } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { createPreviewURL } from "@/lib/image";
import { cn } from "@/lib/utils";

type ImageInputProps = {
  onChange: (e: File | null) => void;
  rounded?: boolean;
  src?: string;
  disabled?: boolean;
};

const ImageInput = ({
  onChange,
  rounded = false,
  src = "",
  disabled = false,
}: ImageInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(src);

  const triggerInputFile = () => {
    ref.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imagePreviewURL = createPreviewURL(e);

    setImage(imagePreviewURL);
    onChange(e.target.files?.[0] ?? null);
  };

  return (
    <div className="flex flex-col items-center gap-3 text-xs">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className={cn(
            "object-cover object-center w-[100px] h-[100px]",
            rounded && "rounded-full"
          )}
        />
      ) : (
        <Button
          variant="dashed"
          className="w-[100px] h-[100px]"
          onClick={triggerInputFile}
          disabled={disabled}
        >
          100x100
        </Button>
      )}

      <Button
        variant="ghost"
        className="text-white flex items-center gap-2"
        onClick={triggerInputFile}
        disabled={disabled}
      >
        <ArrowUpFromLine className="size-4" />

        {image ? "Change image" : "Add image"}
      </Button>

      <input
        ref={ref}
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};

export { ImageInput };
