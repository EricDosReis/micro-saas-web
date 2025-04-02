"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

type NewProjectProps = {
  profileId: string;
};

const NewProject = ({ profileId }: NewProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (show: boolean) => {
    setShowModal(show);
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
        Hello Modal
      </Modal>
    </>
  );
};

export { NewProject };
