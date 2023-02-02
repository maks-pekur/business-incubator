import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import ContactForm from "../components/ui/ContactForm";
import { useModal } from "../contexts/ModalContext";
import Heading from "./ui/Heading";

const trl = {
  pl: "Informacje kontaktowe",
  gb: "Contact information",
  uk: "Контактна інформація",
  ru: "Контактная информация",
};

const Modal = () => {
  const { isOpen, hide } = useModal();
  const { locale } = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={hide}
        >
          <div className="fixed inset-0 bg-black/30 flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg px-16 py-10">
              <div
                className="absolute right-5 top-5 cursor-pointer "
                onClick={hide}
              >
                X
              </div>
              <Heading tag={"h3"}>{trl[locale]}</Heading>
              <div className="w-full">
                <ContactForm />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
