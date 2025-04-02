import { firebaseStorage } from "./firebase";

const sendToStorage = async (file: File, path: string) => {
  const storage = firebaseStorage.file(path);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await storage.save(buffer);

  const filePath = storage.name;

  return filePath;
};

export { sendToStorage };
