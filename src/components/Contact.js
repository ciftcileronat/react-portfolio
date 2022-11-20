import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Button, Heading, VStack } from "@chakra-ui/react";
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

function Contact() {
  const subjectValues = [
    {
      key: "one",
      value: "Subject One",
      id: "one",
    },
    {
      key: "two",
      value: "Subject Two",
      id: "two",
    },
    {
      key: "three",
      value: "Subject Three",
      id: "three",
    },
  ];

  return (
    <Formik
      initialValues={{ fullname: "", email: "", subject: "", message: "" }}
      validationSchema={Yup.object({
        fullname: Yup.string()
          .required("Fullname is required")
          .min(2, "Fullname is too short"),
        email: Yup.string().required("Email is required").email(),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string()
          .required("Message is required")
          .min(4, "Message is too short"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack w={{ md: 500 }} as="form" onSubmit={formik.handleSubmit}>
          <Heading>Contact</Heading>
          <TextField
            label="Fullname"
            name="fullname"
            placeholder="Enter your fullname"
          />
          <TextField
            label="E-Mail"
            name="email"
            placeholder="Enter your email address"
          />
          <SelectField
            label="Subject"
            name="subject"
            placeholder="Select Subject"
            values={subjectValues}
          />
          <TextAreaField
            label="Your message"
            name="message"
            placeholder="Write your message"
          />
          <Button type="submit" colorScheme="blue" w={500}>
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
}

export default Contact;
