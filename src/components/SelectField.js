import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

function SelectField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor="subject">{label}</FormLabel>
      <Field as={Select} {...field} {...props}>
        {props.values.map((value) => (
          <option key={value.id} value={value.value} id={value.id}>
            {value.value}
          </option>
        ))}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default SelectField;
