import React, {useState} from "react";
import * as Styled from "./style";
import { Flex } from "../Flex/Flex";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { Field, Form, Formik } from "formik";
import { signUpSchema } from "./schema";
import { Link } from "react-router-dom";
import {withRouter, useHistory} from "react-router-dom";
import { Loader } from "../Loader";

const axios = require('axios').default;

const SignUp = () => {
  const [load, setLoading] = useState(false);
  const [userError, setError] = useState(false)

  const history = useHistory();


  function errorMessage () {
    return(
      <Styled.ErrorMessage>
        Email has already added
      </Styled.ErrorMessage>
    )
  }

  function checkEmail (values) {
    const checkCondition = (response, values) => {
      return response.find(item => {
        console.log('item',item.email)
        console.log('values',values.email) 
        console.log(item.email === values.email)       
        return item.email === values.email
      })
    }

    fetch('http://localhost:3002/users', values)
              .then(response => response.json())
              .then(response => checkCondition(response, values))
  }

    return(
        <Flex width="100%" height="100%" direction="column" align="center">
      <Flex width="100%"  align="baseline">
        <Styled.TitleStyle>Sign Up</Styled.TitleStyle>
        <Button width="130px" margin="0px 15px 0px 0px">
          <Link to="/auth/signin">Sign In</Link>
        </Button>
      </Flex>

      <Flex width="100%" direction="column" justify="center" align="center" >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userAge: "",
            email: "",
            password: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            return checkEmail(values) ? setError(true) : ( 
              axios.post('http://localhost:3002/users', values)
              .then(function (response) {
                setLoading(false);
                setError(false);
                console.log(response)
                  history.push('/app');
              })
              .catch(function (error) {
                console.log(error);
              }))
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors }) => {
            return load ? (<Loader />) : (
            <Form>
                    {userError ? errorMessage() : null}
              <Flex position="relative" direction="column">

                    <Flex position="relative" width="100%" height="50px" margin="10px 0px" >
                        <Field
                            as={Input}
                            id="firstName"
                            text="Name"
                            name="firstName"
                            error={errors.firstName}
                        />
                    </Flex>

                    <Flex position="relative" width="100%" height="50px" margin="10px 0px" >
                        <Field
                            as={Input}
                            id="userAge"
                            text="Age"
                            name="userAge"
                            error={errors.userAge}
                        />
                    </Flex>

                    <Flex position="relative" width="100%" height="50px" margin="10px 0px" >
                        <Field
                            as={Input}
                            id="lastName"
                            text="Surname"
                            name="lastName"
                            error={errors.lastName}
                        />
                    </Flex>

                    <Flex position="relative" width="100%" height="50px" margin="10px 0px" >
                        <Field
                        as={Input}
                        id="email"
                        text="Email"
                        error={errors.email}
                        name="email"
                        />
                    </Flex>

                    <Flex position="relative" width="100%" height="50px" margin="10px 0px" >
                        <Field
                            as={Input}
                            id="password"
                            text="Password"
                            name="password"
                            type="password"
                            error={errors.password}
                        />
                    </Flex>

                    <Button margin="10px 0 20px" height="40px" type="submit" >
                    Send
                    </Button>
              </Flex>
            </Form>

          )}}
        </Formik>
      </Flex>
    </Flex>
    )
}
export default withRouter(SignUp)