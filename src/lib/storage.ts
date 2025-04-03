import { firebaseStorage } from "./firebase";

const sendToStorage = async (file: File, path: string) => {
  const storage = firebaseStorage.file(path);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await storage.save(buffer);

  const filePath = storage.name;

  return filePath;
};

const getFileURL = async (path: string) => {
  if (!path) {
    return null;
  }

  const file = firebaseStorage.file(path);

  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "01-01-2500",
  });

  return url;
};

export { getFileURL, sendToStorage };
