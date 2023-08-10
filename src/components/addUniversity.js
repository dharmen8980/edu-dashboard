import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export const AddUniversity = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" fullWidth onPress={onOpen}>
        + Add
      </Button>
      <Modal isOpen={isOpen} isDismissable={false} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add University
              </ModalHeader>
              <ModalBody>
                <form className="space-y-2">
                  <Input variant="underlined" label="University Name" />
                  <Input variant="underlined" label="Semester"/>
                  <Input variant="underlined" label="Application Fee ($)"/>
                  <Input variant="underlined" label="Username"/>
                  <Input variant="underlined" label="Password"/>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
