import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  Alert,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./Validations";
import { fetchRegister } from "../../../Api";
import { useAuth } from "../../../context/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister(values);
        /* console.log(registerResponse); */
        login(registerResponse);
      } catch (error) {
        console.log(error.response.data.errors.email[0]);
        bag.setErrors({ general: error.response.data.errors.email[0] });
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
          </Box>
          <Box>
            {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )}
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
                    formik.touched.password_confirmation &&
                    formik.errors.password_confirmation
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
