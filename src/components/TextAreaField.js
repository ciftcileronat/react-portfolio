import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
function TextAreaField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor="message">{label}</FormLabel>
      <Field as={Textarea} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextAreaField;
