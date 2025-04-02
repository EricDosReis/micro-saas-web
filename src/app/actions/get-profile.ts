import "server-only";

import { firebaseDatabase } from "@/lib/firebase";

type Profile = {
  userId: string;
  totalVisits: number;
  createdAt: number;
};

const getProfile = async (profileId: string) => {
  const snapshot = await firebaseDatabase
    .collection("profiles")
    .doc(profileId)
    .get();

  return snapshot.data() as Profile | undefined;
};

export { getProfile };
