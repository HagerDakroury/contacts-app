import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type ReferenceInputProps = {
  id: string;
  label: string;
  initial: string;
};

export const ReferenceInput = React.forwardRef<
  HTMLInputElement,
  ReferenceInputProps
>(({ id, label, initial }, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={ref} id={id} label={label} defaultValue={initial} />
    </FormControl>
  );
});
