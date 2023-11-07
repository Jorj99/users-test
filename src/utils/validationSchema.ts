import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Not valid email").required("Email is required"),
});
