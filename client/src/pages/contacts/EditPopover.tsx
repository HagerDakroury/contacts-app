// 3. Create the Popover

import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { EditForm } from "./EditForm";

interface EditPopoverCompProps {
  trigger?: React.ReactNode;
  _id: string;
  first: string;
  last: string;
  email: string;
}

export const EditPopover: React.FC<EditPopoverCompProps> = ({
  trigger,
  _id,
  first,
  last,
  email,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="left"
      closeOnBlur={true}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent p={5} mt={2}>
        <PopoverArrow />
        <PopoverCloseButton />
        <EditForm
          firstFieldRef={firstFieldRef}
          onCancel={onClose}
          _id={_id}
          first={first}
          last={last}
          email={email}
        />
      </PopoverContent>
    </Popover>
  );
};
