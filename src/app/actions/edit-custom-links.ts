"use server";

import { Timestamp } from "firebase-admin/firestore";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";
import type { CustomLink } from "./get-profile";

type EditCustomLinks = {
  profileId: string;
  customLinks: CustomLink[];
};

const editCustomLinks = async ({ profileId, customLinks }: EditCustomLinks) => {
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

export { editCustomLinks };
