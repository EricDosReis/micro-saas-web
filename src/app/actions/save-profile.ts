"use server";

import { Timestamp } from "firebase-admin/firestore";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";
import { saveProfileImage } from "./save-profile-image";

const saveProfile = async (formData: FormData) => {
  const sessionn = await auth();

  if (!sessionn) {
    return;
  }

  const profileId = formData.get("profileId") as string;
  const name = formData.get("name");
  const introduction = formData.get("introduction");
  const image = formData.get("image") as File;

  const hasImage = image && image.size > 0;
  let imagePath = "";

  if (hasImage) {
    imagePath = await saveProfileImage(profileId, image);
  }

  try {
    await firebaseDatabase
      .collection("profiles")
      .doc(profileId)
      .update({
        name,
        introduction,
        ...(hasImage && { imagePath }),
        updatedAt: Timestamp.now().toMillis(),
      });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export { saveProfile };
