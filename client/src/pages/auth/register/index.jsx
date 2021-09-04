import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./Validations";
export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Ad ve Soyad</FormLabel>
                <Input
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Şifre</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Şifre Tekrar</FormLabel>
                <Input
                  name="password_confirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                  isInvalid={
                    formik.touched.password_confirmation && formik.errors.password_confirmation
                  }
                />
              </FormControl>
              <Button mt="4" width="full" type="submit">
                Kayıt Ol
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
