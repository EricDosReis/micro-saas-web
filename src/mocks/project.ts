import { Timestamp } from "firebase-admin/firestore";
import { randomUUID } from "node:crypto";

import type { ProfileProjectData } from "@/app/actions/get-profile-projects";

const projectsMock: ProfileProjectData[] = [
  {
    id: randomUUID(),
    name: "We are from Taqua",
    description: "Skate video from Taqua City",
    imagePath: "/project-1.png",
    url: "https://www.youtube.com/@Skatude",
    profileId: randomUUID(),
    userId: randomUUID(),
    totalVisits: Math.floor(Math.random() * 100) + 1,
    createdAt: Timestamp.now().toMillis(),
  },
  {
    id: randomUUID(),
    name: "Skatude Stickers Deck",
    description: "New Skatude art deck",
    imagePath: "/project-2.png",
    url: "https://www.youtube.com/@Skatude",
    profileId: randomUUID(),
    userId: randomUUID(),
    totalVisits: Math.floor(Math.random() * 100) + 1,
    createdAt: Timestamp.now().toMillis(),
  },
];

export { projectsMock };
