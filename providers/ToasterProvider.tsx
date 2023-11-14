import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: { background: "#333", color: "#fff", zIndex: 1e3 },
      }}
    />
  );
};

export default ToasterProvider