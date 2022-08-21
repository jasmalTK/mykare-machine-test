import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/macro";
import { staggerOne } from "../../motionUtils";
import Button from "../../Components/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../../style.css";
import SigninInputField from "../../Components/SigninInputField";
import ErrorIcon from "@mui/icons-material/Error";
import ReactTooltip from "react-tooltip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { CheckAuthentication } from "../../Functions/common";
import { loginSuccess } from "../../slices/authSlice";


const SignIn = () => {
  const dispatch = useDispatch();
  const [visibleEye1, setvisibleEye1] = useState(false);
  const [loading, setLoading] = useState(false);
  const userList = useSelector((state) => state.user);
  const [state, setState] = useState({
    username: null,
    password: null,
    username_error: null,
    password_error: null,
  });
 
  const navigate = useNavigate();
  const isLoading = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleChange = (type) => {
    let username_error = state.username_error
    let password_error = state.password_error
    if(type === "username"){
      username_error = null
    }else if(type === "password"){
      password_error = null
    }
    setState((prevState) => {
      return {
        ...prevState,
        username_error,
        password_error,
      };
    });
  }

  
  const onSubmit = (data) => {
    setLoading(true);
    const { username, password } = data;
    let authenticate = CheckAuthentication(userList,username,password)
    if(authenticate.StatusCode === 6000){
      dispatch(loginSuccess(data))
      navigate(`/`)
    }else if(authenticate.StatusCode === 6001){
      setState((prevState) => {
        return {
          ...prevState,
          username_error: authenticate.message,
        };
      });
    }else {
      setState((prevState) => {
        return {
          ...prevState,
          password_error: authenticate.message,
        };
      });
    }
    setLoading(false);
  };
 
  return (
    <MainContainer>
      <Container className="section login wf-section">
        <img src="../../images/1.svg" loading="lazy" alt="" />
        <div className="div-block-4">
          <div className="form-block w-form">
            <Form
              variants={staggerOne}
              initial="initial"
              animate="animate"
              exit="exit"
              className="SignIn__form form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <>
                <SigninInputField
                  // style={{ position: "relative" }}
                  className={
                    errors.username || state.username_error
                      ? "text-field w-input user-name outline-red"
                      : "text-field w-input user-name"
                  }
                  type="text"
                  id="id_username"
                  name="username"
                  placeholder="Username"
                  // validationMessage="Please enter a valid username."
                  validationMessage="username required."
                  validation={register("username", {
                    required: "username required.",
                    onChange: (e) => {
                      handleChange("username");
                    },
                  })}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors.username || state.username_error ? (
                  <>
                    <Exclamation1 data-tip data-for="sadFace" />
                    <StyledReactTooltip
                      id="sadFace"
                      effect="solid"
                      place="bottom"
                      tipPointerPosition="Start"
                    >
                      {errors.username ? (
                        <span>{errors.username.message}</span>
                      ) : state.username_error ? (
                        <span>{state.username_error}</span>
                      ) : null}
                    </StyledReactTooltip>
                  </>
                ) : null}
              </>
              <div style={{ position: "relative", width: "100%" }}>
                <SigninInputField
                  className={
                    errors.password || state.password_error
                      ? "text-field-2 w-input outline-red"
                      : "text-field-2 w-input"
                  }
                  type={visibleEye1 ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  validationMessage="The password should have a length between 6 and 30 characters."
                  // validationMessage="password required."
                  validation={register("password", {
                    required: "password required",
                    onChange: (e) => {
                      handleChange("password");
                    },
                  })}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors.password || state.password_error ? (
                  <>
                    <Exclamation2 data-tip data-for="sadFace1" />
                    <StyledReactTooltip
                      id="sadFace1"
                      effect="solid"
                      place="bottom"
                      tipPointerPosition="Start"
                    >
                       {errors.password ? (
                        <span>{errors.password.message}</span>
                      ) : state.password_error ? (
                        <span>{state.password_error}</span>
                      ) : null}
                    </StyledReactTooltip>
                  </>
                ) : (
                  <>
                    {visibleEye1 ? (
                      <VisibilityOff
                        onClick={() => setvisibleEye1(false)}
                        data-tip
                        data-for="sadFace1"
                      />
                    ) : (
                      <RemovedEye
                        onClick={() => setvisibleEye1(true)}
                        data-tip
                        data-for="sadFace1"
                      />
                    )}
                  </>
                )}
              </div>
              <Button
                className="button w-button"
                color="#fff"
                background="#155e4b"
                text="Sign In"
                type="submit"
                loading={loading}
              ></Button>
                <Button
                  className="button create w-button"
                  background="#fff"
                  color="#276eb5"
                  text="Create New Account"
                  type="button"
                  onClick={() => navigate(`/sign-up`)}
                ></Button>
            </Form>
          </div>
          <TextBlock5>By clicking the above button, you accept our</TextBlock5>
          <TextBlock6>
            <a href="#" className="link">
              Terms of Service
            </a>{" "}
            And{" "}
            <a href="#" className="link-2">
              Privacy Statement
            </a>
          </TextBlock6>
        </div>
      </Container>
    </MainContainer>
  );
};

export default SignIn;

const MainContainer = styled.div`
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #ecf2f0;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  width: 419px;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-style: none;
  border-width: 1px;
  border-color: #dbdbdb;
  background-color: #ecf2f0;
  line-height: 23px;
`;

const TextBlock5 = styled.div`
  margin-top: 17px;
  font-family: Poppins, sans-serif;
  color: #999;
  font-size: 13px;
`;
const TextBlock6 = styled.div`
  color: #a5a5a5;
  font-size: 13px;
  font-weight: 400;
  text-align: right;
  text-decoration: none;
`;
const Form = styled.form``;

const Exclamation1 = styled(ErrorIcon)`
  position: absolute;
  right: 13px;
  cursor: pointer;
  outline: none;
  top: 7px;
  color: #b40000; ;
`;
const Exclamation2 = styled(Exclamation1)`
  /* right: 33px; */
`;

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: white !important;

  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-bottom-color: white !important;
    border-top-color: white !important;
    /* margin-left: 9px !important; */
  }
`;
const RemovedEye = styled(RemoveRedEyeIcon)`
  position: absolute;
  right: 13px;
  cursor: pointer;
  outline: none;
  top: 7px;
  color: #979797;
`;
const VisibilityOff = styled(VisibilityOffIcon)`
  position: absolute;
  right: 13px;
  cursor: pointer;
  outline: none;
  top: 7px;
  color: #979797;
`;

