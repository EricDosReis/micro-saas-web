"use client";

import { Plus } from "lucide-react";
import { startTransition, useState } from "react";

import { createProject } from "@/app/actions/create-project";
import { Button } from "@/components/ui/Button";
import { ImageInput } from "@/components/ui/ImageInput";
import { Modal } from "@/components/ui/Modal";
import { TextInput } from "@/components/ui/TextInput";
import { Textarea } from "@/components/ui/Textarea";
import { compressFiles } from "@/lib/image";
import { useRouter } from "next/navigation";

type NewProjectProps = {
  profileId: string;
};

const NewProject = ({ profileId }: NewProjectProps) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleImageChange = (imageFile: File | null) => {
    setImage(imageFile);
  };

  const handleShowModal = (show: boolean) => {
    if (isFetching) {
      return;
    }

    setShowModal(show);
  };

  const handleCreateProject = async () => {
    if (!image) {
      return;
    }

    setIsFetching(true);

    const [compressedImage] = await compressFiles([image]);

    const formData = new FormData();

    formData.append("profileId", profileId);
    formData.append("image", compressedImage);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("url", url);

    await createProject(formData);

    startTransition(() => {
      setShowModal(false);
      setIsFetching(false);
      setName("");
      setDescription("");
      setUrl("");
      setImage(null);

      router.refresh();
    });
  };

  return (
    <>
      <Button
        className="flex gap-2 justify-center items-center min-w-[340px]"
        variant="dashed"
        onClick={() => handleShowModal(true)}
      >
        <Plus className="size-10" />

        <span className="text-lg">New project</span>
      </Button>

      <Modal isOpen={showModal} open={handleShowModal}>
        <div className="flex flex-col justify-between gap-10">
          <h3 className="text-white font-bold text-3xl">New project</h3>

          <div className="flex gap-10">
            <ImageInput onChange={handleImageChange} />

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Project name
                </label>

                <TextInput
                  id="project-name"
                  placeholder="Type the project name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Description
                </label>

                <Textarea
                  id="project-description"
                  placeholder="A short description of the project"
                  className="h-36"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  Project URL
                </label>

                <TextInput
                  type="url"
                  id="project-url"
                  placeholder="Type the project URL"
                  onChange={(e) => setUrl(e.target.value)}
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

            <Button onClick={handleCreateProject} disabled={isFetching}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { NewProject };
