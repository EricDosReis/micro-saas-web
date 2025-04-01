"use server";

import { firebaseDatabase } from "@/lib/firebase";

const verifyLink = async (link: string) => {
  const snapshot = await firebaseDatabase
    .collection("profiles")
    .doc(link)
    .get();

  return snapshot.exists;
};

export { verifyLink };
