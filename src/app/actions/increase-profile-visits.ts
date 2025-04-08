"use server";

import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { firebaseDatabase } from "@/lib/firebase";

const increaseProfileVisits = async (profileId: string) => {
  try {
    const profileRef = firebaseDatabase.collection("profiles").doc(profileId);

    await firebaseDatabase.runTransaction(async (transaction) => {
      const profileSnapshot = await transaction.get(profileRef);

      if (!profileSnapshot.exists) {
        return;
      }

      transaction.update(profileRef, {
        totalVisits: FieldValue.increment(1),
        updatedAt: Timestamp.now().toMillis(),
      });
    });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export { increaseProfileVisits };
