import React ,{useState} from "react";
import * as Styled from "./style";
import { Flex } from "../Flex/Flex";
import {withRouter, useHistory} from "react-router-dom";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { Field, Form, Formik } from "formik";
import { signInSchema } from "./schema";
import { Link } from "react-router-dom";
import { Loader } from '../Loader';

const SignIn = () => {
  const [load, setLoading] = useState(false);
  const [userError, setError] = useState(false)
  const history = useHistory();

  function errorMessage () {
    return(
      <Styled.ErrorMessage>
        Wrong password or email
      </Styled.ErrorMessage>
    )
  }

  function checkUser (response, values) {
    const checkPassword = () =>{
      const indexElement = response.findIndex(item => item.email === values.email);
      return response[indexElement].password === values.password ? true : setError(true)
    }
    const findUser = response.find(item => item.email === values.email ? checkPassword() : setError(true));
    return findUser;
  }

  return (
    <Flex width="100%" height="100%" direction="column" align="center">
      <Flex width="100%" align="baseline">
        <Styled.TitleStyle>Sign In</Styled.TitleStyle>
        <Button width="130px" margin="0px 15px 0px 0px">
          <Link to="/auth/signup">Sign Up</Link>
        </Button>
      </Flex>
      <Flex
        width="100%"
        height="100%"
        direction="column"
        justify="center"
        align="center"
        padding="40px 0px 20px 0px"
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            setLoading(true)
            console.log(values.email)
            fetch('http://localhost:3002/users').then(response => response.json()).then(response => {
              checkUser(response, values) ? history.push('/app') : setError(true);
              setLoading(false);
            })
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors }) => {
            return load ? (<Loader />) : (
            <Form>
              <Flex position="relative" direction="column">
                <Field
                  as={Input}
                  id="email"
                  text="Email"
                  valid={true}
                  name="email"
                  error={errors.email}
                />

                <Flex
                  position="relative"
                  width="100%"
                  height="50px"
                  margin="30px 0px"
                >
                  <Field
                    as={Input}
                    id="password"
                    text="Password"
                    name="password"
                    type="password"
                  error={errors.password}

                  />
                </Flex>

                <Button margin="0px 0px 10px 0px" height="40px" type="submit">
                  Send
                </Button>
              </Flex>
      {userError ? errorMessage() : null}
            </Form>
            
          )}
          }
        </Formik>
      </Flex>
    </Flex>
  );
};

export default withRouter(SignIn)