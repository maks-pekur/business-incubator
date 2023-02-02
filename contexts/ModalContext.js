import React, { useContext, useState } from "react";

const ModalContext = React.createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hide = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        hide,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
