import { Timestamp } from "firebase-admin/firestore";
import { randomUUID } from "node:crypto";

import type { ProfileData } from "@/app/actions/get-profile";

const profileMock: ProfileData = {
  name: "EricDosReis",
  introduction: "I develop things and ride my skateboard.",
  imagePath: "/me.jpg",
  userId: randomUUID(),
  totalVisits: Math.floor(Math.random() * 100) + 1,
  socialMedias: {
    github: "https://github.com/EricDosReis",
    linkedin: "https://www.linkedin.com/in/ericdosreis/",
    instagram: "https://www.instagram.com/skatude.co",
  },
  customLinks: [
    {
      title: "Skatude channel",
      url: "https://www.youtube.com/@Skatude",
    },
    {
      title: "Fornalha website",
      url: "https://fornalhaskateboard.com/",
    },
  ],
  createdAt: Timestamp.now().toMillis(),
  updatedAt: Timestamp.now().toMillis(),
};

export { profileMock };
