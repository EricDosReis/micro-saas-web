"use server";

import { Timestamp } from "firebase-admin/firestore";
import { randomUUID } from "node:crypto";

import { auth } from "@/lib/auth";
import { firebaseDatabase } from "@/lib/firebase";
import { saveFile } from "@/lib/storage";

const createProject = async (formData: FormData) => {
  const session = await auth();

  if (!session) {
    return;
  }

  const profileId = formData.get("profileId") as string;
  const name = formData.get("name");
  const description = formData.get("description");
  const url = formData.get("url");
  const image = formData.get("image") as File;

  const generatedId = randomUUID();

  const imagePath = await saveFile(
    image,
    `projects-images/${profileId}/${generatedId}`
  );

  try {
    await firebaseDatabase
      .collection("profiles")
      .doc(profileId)
      .collection("projects")
      .doc()
      .set({
        id: generatedId,
        userId: session?.user?.id,
        profileId,
        name,
        description,
        imagePath,
        url,
        createdAt: Timestamp.now().toMillis(),
      });

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export { createProject };
