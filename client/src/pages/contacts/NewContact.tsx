import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

type NewContactProps = {
  isOpen: boolean;
  onClose: () => void;
};
const NewContact: React.FC<NewContactProps> = ({ isOpen, onClose }) => {
  //tracking modal

  //tracking inputs for validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const isInvalid = email === "" || lastName === "" || firstName === "";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            bgColor="#31B3C2"
            textColor="#FFFFFF"
            mr={3}
            onClick={onClose}
            isDisabled={isInvalid}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewContact;
