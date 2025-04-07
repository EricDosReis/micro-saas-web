import "server-only";

import { firebaseDatabase } from "@/lib/firebase";

export type SocialMedias = {
  instagram: string;
  linkedin: string;
  github: string;
  twitter: string;
};

export type CustomLink = {
  title: string;
  url: string;
};

export type ProfileData = {
  userId: string;
  totalVisits: number;
  createdAt: number;
  socialMedias?: SocialMedias;
  customLinks?: CustomLink[];
  updatedAt?: number;
};

const getProfile = async (profileId: string) => {
  const snapshot = await firebaseDatabase
    .collection("profiles")
    .doc(profileId)
    .get();

  return snapshot.data() as ProfileData | undefined;
};

export { getProfile };
