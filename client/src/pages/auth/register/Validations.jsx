import * as yup from "yup";
const validationSchema = yup.object().shape({
  name: yup.string().required("Zorunlu alan"),
  email: yup.string().email("Geçerli Email Girin!").required("Zorunlu alan"),
  password: yup
    .string()
    .min(5, "Parolanız minimum 5 karakter olmalı")
    .required(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor"),
});

export default validationSchema;
