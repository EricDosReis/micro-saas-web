"use client";

import { Plus, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import { editCustomLinks } from "@/app/actions/edit-custom-links";
import type { CustomLink } from "@/app/actions/get-profile";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { TextInput } from "@/components/ui/TextInput";
import { sanitizeCustomLinks } from "@/lib/formatters";

type EditCustomLinksProps = {
  customLinks: CustomLink[];
};

const EditCustomLinks = ({ customLinks }: EditCustomLinksProps) => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [links, setLinks] = useState(() =>
    customLinks.length ? customLinks : [{ title: "", url: "" }]
  );

  const { profileId } = useParams();

  const handleShowModal = (show: boolean) => {
    if (isFetching) {
      return;
    }

    setShowModal(show);
  };

  const handleSaveCustomLinks = async () => {
    if (!profileId) return;

    const sanitizedCustomLinks = sanitizeCustomLinks(links);

    setIsFetching(true);

    await editCustomLinks({
      profileId: profileId as string,
      customLinks: sanitizedCustomLinks,
    });

    startTransition(() => {
      setShowModal(false);
      setIsFetching(false);

      router.refresh();
    });
  };

  const handleLinkChange = (
    value: string,
    field: keyof CustomLink,
    index: number
  ) => {
    const nextLinks = [...links];

    nextLinks[index][field] = value;

    setLinks(nextLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { title: "", url: "" }]);
  };

  const handleRemoveLink = (index: number) => {
    if (links.length === 1) {
      setLinks([{ title: "", url: "" }]);

      return;
    }

    const nextLinks = [...links];

    nextLinks.splice(index, 1);

    setLinks(nextLinks);
  };

  return (
    <>
      <Button variant="dashed" onClick={() => handleShowModal(true)}>
        <Plus />
      </Button>

      <Modal isOpen={showModal} open={handleShowModal}>
        <div className="flex flex-col justify-between gap-10">
          <h3 className="text-white font-bold text-3xl">Add custom links</h3>

          <div className="flex flex-col gap-4">
            {links.map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex flex-col w-full">
                  <label htmlFor={`title-${index}`} className="font-bold">
                    Title
                  </label>

                  <TextInput
                    id={`title-${index}`}
                    placeholder="Type the title"
                    disabled={isFetching}
                    value={links[index].title}
                    onChange={(e) =>
                      handleLinkChange(e.target.value, "title", index)
                    }
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor={`url-${index}`} className="font-bold">
                    URL
                  </label>

                  <TextInput
                    id={`url-${index}`}
                    placeholder="Type the URL"
                    disabled={isFetching}
                    value={links[index].url}
                    onChange={(e) =>
                      handleLinkChange(e.target.value, "url", index)
                    }
                  />
                </div>

                <Button
                  variant="ghost"
                  className="self-end"
                  onClick={() => handleRemoveLink(index)}
                  disabled={isFetching}
                >
                  <Trash2 />
                </Button>
              </div>
            ))}

            <Button
              variant="ghost"
              className="self-end"
              onClick={() => handleAddLink()}
              disabled={isFetching}
            >
              Add link
            </Button>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              variant="ghost"
              onClick={() => handleShowModal(false)}
              disabled={isFetching}
            >
              Back
            </Button>

            <Button onClick={handleSaveCustomLinks} disabled={isFetching}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { EditCustomLinks };
