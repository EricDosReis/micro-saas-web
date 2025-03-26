"use server";

import { auth, signIn, signOut } from "@/lib/auth";

const manageAuth = async () => {
  const session = await auth();

  if (!session) {
    return await signIn("google", {
      redirectTo: "/create",
    });
  }

  return await signOut({
    redirectTo: "/",
  });
};

export { manageAuth };
