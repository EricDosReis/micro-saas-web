"use client";

import { UserPen } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import { ProfileData } from "@/app/actions/get-profile";
import { saveProfile } from "@/app/actions/save-profile";
import { Button } from "@/components/ui/Button";
import { ImageInput } from "@/components/ui/ImageInput";
import { Modal } from "@/components/ui/Modal";
import { Textarea } from "@/components/ui/Textarea";
import { TextInput } from "@/components/ui/TextInput";
import { compressFiles } from "@/lib/image";

type EditProfileProps = Pick<
  ProfileData,
  "name" | "introduction" | "imagePath"
>;

const EditProfile = (props: EditProfileProps) => {
  const router = useRouter();
  const { profileId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [name, setName] = useState(props.name);
  const [introduction, setIntroduction] = useState(props.introduction);
  const [image, setImage] = useState<File | null>(null);

  const handleShowModal = (show: boolean) => {
    if (isFetching) {
      return;
    }

    setShowModal(show);
  };

  const handleImageChange = (imageFile: File | null) => {
    setImage(imageFile);
  };

  const handleEditUser = async () => {
    setIsFetching(true);

    const formData = new FormData();

    formData.append("profileId", profileId as string);
    formData.append("name", name);
    formData.append("introduction", introduction);

    if (image) {
      const [compressedImage] = await compressFiles([image]);

      formData.append("image", compressedImage);
    }

    await saveProfile(formData);

    startTransition(() => {
      setShowModal(false);
      setIsFetching(false);

      router.refresh();
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        className="text-gray-500"
        onClick={() => handleShowModal(true)}
      >
        <UserPen />
      </Button>

      <Modal isOpen={showModal} open={handleShowModal}>
        <div className="flex flex-col justify-between gap-10">
          <h3 className="text-white font-bold text-3xl">Your data</h3>

          <div className="flex gap-10">
            <ImageInput
              rounded
              src={props.imagePath}
              onChange={handleImageChange}
              disabled={isFetching}
            />

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-white font-bold">
                  Name
                </label>

                <TextInput
                  id="name"
                  placeholder="Type your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isFetching}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="introduction" className="text-white font-bold">
                  Introduction
                </label>

                <Textarea
                  id="introduction"
                  placeholder="A short introduction about you"
                  className="h-36"
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  disabled={isFetching}
                />
              </div>
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

            <Button onClick={handleEditUser} disabled={isFetching}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { EditProfile };
