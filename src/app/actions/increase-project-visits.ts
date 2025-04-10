"use server";

import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { firebaseDatabase } from "@/lib/firebase";

const increaseProjectVisits = async (profileId: string, id: string) => {
  try {
    const projectRef = firebaseDatabase
      .collection("profiles")
      .doc(profileId)
      .collection("projects")
      .doc(id);

    await firebaseDatabase.runTransaction(async (transaction) => {
      const projectSnapshot = await transaction.get(projectRef);

      if (!projectSnapshot.exists) {
        return;
      }

      transaction.update(projectRef, {
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

export { increaseProjectVisits };
