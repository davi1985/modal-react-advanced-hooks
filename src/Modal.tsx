import { Button, Header, Image, Modal } from "semantic-ui-react";
import { forwardRef, useImperativeHandle, useState } from "react";

export const CustomModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useImperativeHandle(
    ref,
    () => ({
      onOpen,
      onClose,
      isOpen,
    }),
    [isOpen]
  );

  return (
    <Modal onClose={onClose} onOpen={onOpen} open={isOpen}>
      <Modal.Header>Select a Photo</Modal.Header>

      <Modal.Content image>
        <Image
          size="small"
          src="https://github.com/davi1985.png"
          wrapped
          rounded
        />

        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button color="black" onClick={onClose}>
          Nope
        </Button>

        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={onClose}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
});
