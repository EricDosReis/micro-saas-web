import { ArrowUpFromLine } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { getImagePreview } from "@/lib/image";

type ImageInputProps = {
  onChange: (e: File | null) => void;
};

const ImageInput = ({ onChange }: ImageInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const triggerInputFile = () => {
    ref.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imagePreview = getImagePreview(e);

    setPreview(imagePreview);
    onChange(e.target.files?.[0] ?? null);
  };

  return (
    <div className="flex flex-col items-center gap-3 text-xs">
      {preview ? (
        <img
          src={preview}
          alt="Project image"
          className="object-cover object-center w-[100px] h-[100px]"
        />
      ) : (
        <Button
          variant="dashed"
          className="w-[100px] h-[100px]"
          onClick={triggerInputFile}
        >
          100x100
        </Button>
      )}

      <Button
        variant="ghost"
        className="text-white flex items-center gap-2"
        onClick={triggerInputFile}
      >
        <ArrowUpFromLine className="size-4" />

        <span>Add image</span>
      </Button>

      <input
        ref={ref}
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export { ImageInput };
