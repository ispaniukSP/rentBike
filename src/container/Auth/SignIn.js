import React, { useEffect } from "react";
import * as Styled from "./style";
import { Flex } from "../../components/Flex/Flex";
import { withRouter, useHistory } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Field, Form, Formik } from "formik";
import { signInSchema } from "./schema";
import { Link } from "react-router-dom";
import { AppLoader } from "../../components/AppLoader";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../store/actions/user/user.action";

const SignIn = () => {
  const history = useHistory();
  const user = useSelector(state => state.user);
  const city = useSelector(state => state.city);
  const dispatch = useDispatch();

  const errorMessage = (text) => {
    return <Styled.ErrorMessage>{!!text ? text : "Wrong password or email"}</Styled.ErrorMessage>;
  }

  useEffect(() => {
    if(user.userInfo){
      console.log('aa')
      history.push('/city');
    }
  }, [user.userInfo])
  

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
            dispatch(getUserLogin(values));
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ errors }) => {
            return user.loader ? (
              <AppLoader />
            ) : (
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
                {!!user.error ? errorMessage(user?.error?.error) : null}
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default withRouter(SignIn);