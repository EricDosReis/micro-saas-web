"use server";

import { Timestamp } from "firebase-admin/firestore";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";
import type { CustomLink } from "./get-profile";

type SaveCustomLinks = {
  profileId: string;
  customLinks: CustomLink[];
};

const saveCustomLinks = async ({ profileId, customLinks }: SaveCustomLinks) => {
  const sessionn = await auth();

  if (!sessionn) {
    return;
  }

  try {
    await firebaseDatabase.collection("profiles").doc(profileId).update({
      customLinks,
      updatedAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export { saveCustomLinks };
