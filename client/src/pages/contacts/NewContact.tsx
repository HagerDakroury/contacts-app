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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { newContact } from "../../hooks/useContact";

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
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(newContact, {
    onSuccess: () => {
      toast({ status: "success", description: "New Contact Added!" });
      queryClient.invalidateQueries("contacts");
      onClose();
    },
    onError: (error: any) => {
      toast({ status: "error", description: error?.response?.data });
    },
  });

  function handleSave() {
    mutate({ _id: "dummy", first: firstName, last: lastName, email: email });
  }

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
            onClick={handleSave}
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
