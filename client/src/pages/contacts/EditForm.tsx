// 1. Create a text input component

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { editContact } from "../../hooks/useContact";
type EditFormProps = {
  firstFieldRef: React.MutableRefObject<null>;
  onCancel: () => void;
  _id: string;
  first: string;
  last: string;
  email: string;
};
export const EditForm: React.FC<EditFormProps> = ({
  firstFieldRef,
  onCancel,
  _id,
  first,
  last,
  email,
}) => {
  const [initialFields] = useState({ first, last, email });
  const [fields, setFields] = useState({ first, last, email });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(editContact, {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
    },
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSave = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(fields);
    mutate({ _id, ...fields });
  };

  const handleClose = () => {
    setFields({ ...initialFields });
    onCancel();
  };

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          name="first"
          value={fields.first}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          name="last"
          value={fields.last}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          value={fields.email}
          onChange={handleChange}
        />
      </FormControl>

      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button bgColor="#31B3C2" textColor="#FFFFFF" onClick={handleSave}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
