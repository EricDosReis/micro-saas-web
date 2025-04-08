"use client";

import { Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import type { SocialMedias } from "@/app/actions/get-profile";
import { saveSocialMedias } from "@/app/actions/save-social-medias";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { TextInput } from "@/components/ui/TextInput";

type EditSocialMediasProps = SocialMedias;

const EditSocialMedias = ({
  github,
  instagram,
  linkedin,
  twitter,
}: EditSocialMediasProps) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [githubValue, setGithubValue] = useState(github);
  const [instagramValue, setInstagramValue] = useState(instagram);
  const [linkedinValue, setLinkedinValue] = useState(linkedin);
  const [twitterValue, setTwitterValue] = useState(twitter);

  const { profileId } = useParams();

  const handleShowModal = (show: boolean) => {
    if (isFetching) {
      return;
    }

    setShowModal(show);
  };

  async function handleSaveSocialMedias() {
    setIsFetching(true);

    if (!profileId) return;

    await saveSocialMedias({
      profileId: profileId as string,
      github: githubValue,
      instagram: instagramValue,
      linkedin: linkedinValue,
      twitter: twitterValue,
    });

    startTransition(() => {
      setShowModal(false);
      setIsFetching(false);

      router.refresh();
    });
  }

  return (
    <>
      <Button
        variant="dashed"
        aria-label="Add social medias"
        onClick={() => handleShowModal(true)}
      >
        <Plus aria-hidden />
      </Button>

      <Modal isOpen={showModal} open={handleShowModal}>
        <div className="flex flex-col justify-between gap-10">
          <h3 className="text-white font-bold text-3xl">Add social media</h3>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-full">
              <Github />

              <TextInput
                type="url"
                placeholder="Github link"
                value={githubValue}
                onChange={(e) => setGithubValue(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <Linkedin />

              <TextInput
                type="url"
                placeholder="LinkedIn link"
                value={linkedinValue}
                onChange={(e) => setLinkedinValue(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <Instagram />

              <TextInput
                type="url"
                placeholder="Instagram link"
                value={instagramValue}
                onChange={(e) => setInstagramValue(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <Twitter />

              <TextInput
                type="url"
                placeholder="Twitter link"
                value={twitterValue}
                onChange={(e) => setTwitterValue(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              variant="ghost"
              onClick={() => handleShowModal(false)}
              disabled={isFetching}
            >
              Back
            </Button>

            <Button onClick={handleSaveSocialMedias} disabled={isFetching}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { EditSocialMedias };
