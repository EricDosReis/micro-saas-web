import { useRef, type ReactNode } from "react";

import { useClickOutside } from "@/app/hooks/useClickOutside";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  open: (isOpen: boolean) => void;
};

const Modal = ({ children, isOpen, open }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => open(false));

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-[#787878]/10 flex items-center justify-center backdrop-blur-md z-50">
      <div ref={ref}>
        <div className="md:w-[600px] lg:w-[800px] bg-gray-900 p-8 rounded-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
