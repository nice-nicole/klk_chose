import { Formik, Form, Field } from "formik";
import {
  Button,
  FormErrorMessage,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import * as yup from "yup";

function ContactForm() {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Your name is required."),
    phone: yup.string().required("Your phone number is required."),
    email: yup
      .string()
      .email("Invalid email")
      .required("Your email is required."),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                mb={5}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} id="name" placeholder="Enter your name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="phone">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.phone && form.touched.phone}
                mb={5}
              >
                <FormLabel htmlFor="phone">Phone number</FormLabel>
                <Input
                  {...field}
                  id="phone"
                  placeholder="Enter your phone number"
                />
                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
                mb={5}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Enter your email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="purple"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
