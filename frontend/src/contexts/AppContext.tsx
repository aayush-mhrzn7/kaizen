import { createContext, useContext, useState } from "react";
import Toast from "../Components/Toast";

type toastMessage = {
  message: string;
  type: "sucess" | "error";
};
type AppContext = {
  showToast: (toastMessage: toastMessage) => void;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<toastMessage | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        showToast: (message) => {
          setToast(message);
        },
      }}
    >
      {toast && (
        <Toast
          onClose={() => setToast(undefined)}
          message={toast.message}
          type={toast.type}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
