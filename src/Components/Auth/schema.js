import * as Yup from "yup";
export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password should include at least 5 chars")
    .max(25, "Password should include less than 25 chars")
    .required("Password is required"),
});

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Put your name'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Put your surname'),
  userAge: Yup.number()    
    .typeError('Please use numbers')
    .required('Put your age'),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password should include at least 5 chars")
    .max(25, "Password should include less than 25 chars")
    .required("Password is required"),
})

export const historySchema = Yup.object({
  countbike: Yup.number()
    .typeError('Please use numbers')
    .min(1)
    .max(50)
    .required('Fill please count of bikes you want to rent'),
})
