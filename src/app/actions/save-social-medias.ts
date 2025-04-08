"use server";

import { Timestamp } from "firebase-admin/firestore";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";

type SaveSocialMedias = {
  profileId: string;
  instagram: string;
  linkedin: string;
  github: string;
  twitter: string;
};

const saveSocialMedias = async ({
  profileId,
  instagram,
  linkedin,
  github,
  twitter,
}: SaveSocialMedias) => {
  const sessionn = await auth();

  if (!sessionn) {
    return;
  }

  try {
    await firebaseDatabase.collection("profiles").doc(profileId).update({
      socialMedias: {
        instagram,
        linkedin,
        github,
        twitter,
      },
      updatedAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export { saveSocialMedias };
