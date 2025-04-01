"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { sanitizeLink } from "@/lib/formatters";

const CreateLinkForm = () => {
  const router = useRouter();

  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(sanitizeLink(e.target.value));
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (link.length === 0) {
      setError("Choose a link");

      return;
    }

    const isLinkTaken = await verifyLink(link);

    if (isLinkTaken) {
      setError("Link not available, choose another one");

      return;
    }

    const isLinkCreated = await createLink(link);

    if (!isLinkCreated) {
      setError("Something went wrong, try again");

      return;
    }

    router.push(`/${link}`);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="w-full flex items-center gap-2">
        <span className="text-white text-xl">myprojects.com/</span>

        <TextInput
          placeholder="Your link"
          value={link}
          onChange={handleLinkChange}
        />

        <Button>Create now</Button>
      </div>

      {error && <span className="text-red-400 text-center">{error}</span>}
    </form>
  );
};

export { CreateLinkForm };
