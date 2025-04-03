import { firebaseDatabase } from "@/lib/firebase";

export type ProfileProjectData = {
  id: string;
  userId: string;
  profileId: string;
  name: string;
  description: string;
  url: string;
  imagePath: string;
  totalVisits?: number;
  createdAt: number;
};

const getProfileProjects = async (profileId: string) => {
  const snapshot = await firebaseDatabase
    .collection("profiles")
    .doc(profileId)
    .collection("projects")
    .get();

  return snapshot.docs.map((doc) => doc.data()) as ProfileProjectData[];
};

export { getProfileProjects };
