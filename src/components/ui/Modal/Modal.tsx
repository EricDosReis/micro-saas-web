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
      <div ref={ref}>{children}</div>
    </div>
  );
};

export { Modal };
