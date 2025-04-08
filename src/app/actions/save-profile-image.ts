"use server";

import { firebaseDatabase, firebaseStorage } from "@/lib/firebase";
import { saveFile } from "@/lib/storage";
import { randomUUID } from "crypto";

const saveProfileImage = async (profileId: string, image: File) => {
  const currentProfile = await firebaseDatabase
    .collection("profiles")
    .doc(profileId)
    .get();

  const currentImagePath = currentProfile?.data()?.imagePath;

  if (currentImagePath) {
    const currentStotage = firebaseStorage.file(currentImagePath);
    const [exists] = await currentStotage.exists();

    if (exists) {
      await currentStotage.delete();
    }
  }

  const generatedId = randomUUID();

  return saveFile(image, `profiles-images/${profileId}/${generatedId}`);
};

export { saveProfileImage };
