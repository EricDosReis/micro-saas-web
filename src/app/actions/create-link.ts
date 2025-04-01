"use server";

import { Timestamp } from "firebase-admin/firestore";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";

const createLink = async (link: string) => {
  const session = await auth();

  if (!session?.user) {
    return;
  }

  try {
    await firebaseDatabase.collection("profiles").doc(link).set({
      userId: session.user.id,
      totalVisits: 0,
      createdAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch {
    return false;
  }
};

export { createLink };
