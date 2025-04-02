import imageCompression from "browser-image-compression";
import type { ChangeEvent } from "react";

const MAX_SIZE_IN_MB = 0.2;
const MAX_WIDTH_OR_HEIGHT_IN_PIXELS = 900;

const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve) => {
    const options = {
      maxSizeMB: MAX_SIZE_IN_MB,
      maxWidthOrHeight: MAX_WIDTH_OR_HEIGHT_IN_PIXELS,
      useWebWorker: true,
      fileType: "image/png",
    };

    imageCompression(file, options).then((compressedFile) => {
      resolve(compressedFile);
    });
  });
};

const compressFiles = async (files: File[]) => {
  const compressPromisses = files.map(async (file) => {
    try {
      return compressImage(file);
    } catch (error) {
      console.error(error);

      return null;
    }
  });

  const compressedFiles = await Promise.all(compressPromisses);

  return compressedFiles.filter((file) => file !== null);
};

const getImagePreview = (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0] ?? null;

  if (!file) {
    return null;
  }

  return URL.createObjectURL(file);
};

export { compressFiles, getImagePreview };
