import { useCallback, useRef } from "react";
import { CustomModal } from "./Modal";
import { Button } from "semantic-ui-react";

export const App = () => {
  const modalRef = useRef<any>(null);

  const handleClickModal = useCallback(() => {
    if (modalRef.current !== null) {
      modalRef.current.onOpen();
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#121214",
      }}
    >
      <CustomModal ref={modalRef} />

      <Button onClick={handleClickModal} primary>
        Open Modal
      </Button>
    </div>
  );
};
