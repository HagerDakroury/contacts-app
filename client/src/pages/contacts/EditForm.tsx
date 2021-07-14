// 1. Create a text input component

import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import React from "react";
import { ReferenceInput } from "./ReferenceInput";

type EditFormProps = {
  firstFieldRef: React.MutableRefObject<null>;
  onCancel: () => void;
  first: string;
  last: string;
  email: string;
};
export const EditForm: React.FC<EditFormProps> = ({
  firstFieldRef,
  onCancel,
  first,
  last,
  email,
}) => {
  return (
    <Stack spacing={4}>
      <ReferenceInput label="First name" id="first-name" initial={first} />
      <ReferenceInput label="Last name" id="last-name" initial={last} />
      <ReferenceInput label="Email" id="email" initial={email} />
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button bgColor="#31B3C2" textColor="#FFFFFF">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
