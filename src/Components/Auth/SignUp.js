import { getUserRegister } from "../../store/actions/user/user.action";
import {withRouter, useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from "formik";
import React, {useEffect} from "react";
import { Button } from "../Button/Button";
import { signUpSchema } from "./schema";
import { Flex } from "../Flex/Flex";
import Input from "../Input/Input";
import { Loader } from "../Loader";
import * as Styled from "./style";

const axios = require('axios').default;

const SignUp = () => {
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    if(user.available) {
      localStorage.setItem("token", user.userInfo.token);
      history.push('/city');
    } 
  }, [user.available])
  const dispatch = useDispatch();
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
            dispatch(getUserRegister(values));
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors }) => {
            return user.loader ? (<Loader />) : (
            <Form>
                    {!!user.error ? errorMessage(user?.error?.error) : null}
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