import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/macro";
import { staggerOne } from "../../motionUtils";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import { containsWhitespace, Encrypt } from "../../Functions/utils";
import "../../style.css";
import SignupInputField from "../../Components/SignupInputField";
import ErrorIcon from "@mui/icons-material/Error";
import ReactTooltip from "react-tooltip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { CheckUserName } from "../../Functions/common";
import { signUpSuccess } from "../../slices/userSlice";
import { v4 as uuid } from 'uuid';


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = false;
  const [loaing, setLoading] = useState(false);
  const [visibleEye1, setvisibleEye1] = useState(false);
  const [visibleEye2, setvisibleEye2] = useState(false);
  const userList = useSelector((state) => state.user);
  const [state, setState] = useState({
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
    username: "",
    loading: true,
    is_username: false,
    username_error: "",
    error_msg: "",
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const new_password1 = useRef({});
  new_password1.current = watch("password1", "");


  const onSubmit = async (data) => {
    setLoading(true);
    if(state.is_username === false){
      let new_user = {
        user_id: uuid(),
        username: data.username,
        password: Encrypt(data.password1),
        email: data.email,
        first_name: data.firstname,
        last_name: data.lastname,
      }
      dispatch(signUpSuccess(new_user))
      navigate(`/signin`)
    }
    setLoading(false);
  };

  const checkUsername = async (name, e) => {
    let value = e.target.value;
    if(CheckUserName(userList,value)){
      setState((prevState) => {
        return {
          ...prevState,
          is_username: true,
          [name]: value,
          username_error: "username already exist",
        };
      });
    } else if (containsWhitespace(value)) {
      setState((prevState) => {
        return {
          ...prevState,
          is_username: true,
          [name]: value,
          username_error: "you can't use space for username",
        };
      });
      state.is_username = false;
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          is_username: false,
          [name]: value,
          username_error: "",
        };
      });
    }
    
  };

  const handlechange = (e, v) => {
    let password1 = e.target.value;
    setState({
      ...state,
      password1,
    });
  };
 
  

  if (loaing) {
    return <Loader />;
  } else {
    return (
      <MainContainer>
        <div className="section login sign-up wf-section">
          <img src="../../images/1.svg" loading="lazy" alt="" />
          <ContainerHead className="text-block-4">
            Create mykare account
          </ContainerHead>

          <Form
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
            className="SignIn__form div-block-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-block w-form">
              <div className="form sign-up">
                <div style={{ position: "relative", width: "100%" }}>
                  <SignupInputField
                    className={
                      errors.firstname
                        ? "text-field _1 w-input outline-red"
                        : "text-field _1 w-input"
                    }
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    validationMessage="Please enter your first name."
                    validation={register("firstname", {
                      required: "Please enter your first name.",
                      // required: true,
                    })}
                    errors={errors}
                    disabled={isLoading}
                  />
                  {errors.firstname && (
                    <>
                      <Exclamation1 data-tip data-for="sadFace1" />
                      <StyledReactTooltip
                        id="sadFace1"
                        effect="solid"
                        place="bottom"
                        tipPointerPosition="Start"
                      >
                        {errors.firstname && (
                          <span>{errors.firstname.message}</span>
                        )}
                      </StyledReactTooltip>
                    </>
                  )}
                </div>
                <SignupInputField
                  className="text-field-2 _2 w-input"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  validationMessage="Please enter your last name."
                  validation={register("lastname", {
                    required: false,
                  })}
                  errors={errors}
                  disabled={isLoading}
                />
              </div>
            </div>
            <UserNameDiv className="form-block w-form">
              <div className="form sign-up _2">
                <SignupInputField
                  className={
                    errors.username || state.is_username
                      ? "text-field _1 _2 w-input outline-red"
                      : "text-field _1 _2 w-input"
                  }
                  type="text"
                  name="username"
                  placeholder="Username"
                  validationMessage="username required."
                  validation={register("username", {
                    required: "username required.",
                    onChange: (e) => {
                      checkUsername("username", e);
                    },
                  })}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors.username || state.is_username ? (
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
                      ) : state.is_username ? (
                        <span>{state.username_error}</span>
                      ) : null}
                    </StyledReactTooltip>
                  </>
                ) : null}
              </div>
            </UserNameDiv>

            <div className="form-block w-form">
              <div
                style={{ position: "relative", width: "100%" }}
                className="form sign-up _2"
              >
                <SignupInputField
                  className={
                    errors.email
                      ? "text-field _1 _2 w-input outline-red"
                      : "text-field _1 _2 w-input"
                  }
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  validationMessage="Please enter a valid email address."
                  // message="This will be used for verification."
                  validation={register("email", {
                    required: "Please enter a valid email address.",

                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "enter a valid email address",
                    },
                  })}
                  errors={errors}
                  disabled={isLoading}
                />
                {errors.email && (
                  <>
                    <Exclamation1 data-tip data-for="sadFace2" />
                    <StyledReactTooltip
                      id="sadFace2"
                      effect="solid"
                      place="bottom"
                      tipPointerPosition="Start"
                    >
                      {errors.email && <span>{errors.email.message}</span>}
                    </StyledReactTooltip>
                  </>
                )}
              </div>
            </div>

            
            <div className="form-block w-form">
              <div className="form sign-up">
                <div style={{ position: "relative", width: "100%" }}>
                  <SignupInputField
                    className={
                      errors.password1
                        ? "text-field _1 w-input outline-red"
                        : "text-field _1 w-input"
                    }
                    type={visibleEye1 ? "text" : "password"}
                    name="password1"
                    placeholder="Password"
                    validation={register("password1", {
                      validate: (value) =>
                        value === new_password1.current ||
                        "The passwords do not match",
                      required: "password required",
                      minLength: {
                        value: 6,
                        message:
                          "The password should have minimum length of 6 characters",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "The password should have maximum of 30 characters",
                      },
                      onChange: (e, v) => {
                        handlechange(e, v);
                      },
                    })}
                    errors={errors}
                    disabled={isLoading}
                  />
                  {errors.password1 ? (
                    <>
                      <Exclamation1 data-tip data-for="sadFace4" />
                      <StyledReactTooltip
                        id="sadFace4"
                        effect="solid"
                        place="bottom"
                        tipPointerPosition="Start"
                      >
                        {errors.password1 && (
                          <span>{errors.password1.message}</span>
                        )}
                      </StyledReactTooltip>
                    </>
                  ) : (
                    <>
                      {visibleEye1 ? (
                        <VisibilityOff onClick={() => setvisibleEye1(false)} />
                      ) : (
                        <RemovedEye onClick={() => setvisibleEye1(true)} />
                      )}
                    </>
                  )}
                </div>
                <div style={{ position: "relative", width: "100%" }}>
                  <SignupInputField
                    className={
                      errors.password2
                        ? "text-field-2 _2 w-input outline-red"
                        : "text-field-2 _2 w-input"
                    }
                    type={visibleEye2 ? "text" : "password"}
                    name="password2"
                    placeholder="Confirm"
                    validation={register("password2", {
                      validate: (value) =>
                        value === new_password1.current ||
                        "The passwords do not match",
                      required: "password required",
                      minLength: {
                        value: 6,
                        message:
                          "The password should have minimum length of 6 characters",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "The password should have maximum of 30 characters",
                      },
                      onChange: (e, v) => {
                        handlechange(e, v);
                      },
                    })}
                    errors={errors}
                    disabled={isLoading}
                  />
                  {errors.password2 ? (
                    <>
                      <Exclamation1 data-tip data-for="sadFace5" />
                      <StyledReactTooltip
                        id="sadFace5"
                        effect="solid"
                        place="bottom"
                        tipPointerPosition="Start"
                      >
                        {errors.password2 && (
                          <span>{errors.password2.message}</span>
                        )}
                      </StyledReactTooltip>
                    </>
                  ) : (
                    <>
                      {visibleEye2 ? (
                        <VisibilityOff onClick={() => setvisibleEye2(false)} />
                      ) : (
                        <RemovedEye onClick={() => setvisibleEye2(true)} />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="div-block-7">
              <GoToSignin
                onClick={() => navigate(`/signin`)}
                className="text-block-8"
              >
                Sign in Instead.
              </GoToSignin>
              <div className="form-block _55 w-form">
                <div className="form _33">
                  <div className="div-block-5"></div>

                  <Button
                    className="button _2 w-button"
                    color="#fff"
                    background="#155e4b"
                    text="Sign up"
                    type="submit"
                  ></Button>
                </div>
              </div>
            </div>
            <div className="div-block-8">
              <div className="text-block-5">
                By clicking the above button, you accept our
              </div>
              <div className="text-block-6">
                <a href="#" className="link">
                  Terms of Service
                </a>{" "}
                And{" "}
                <a href="#" className="link-2">
                  Privacy Statement
                </a>
              </div>
            </div>
          </Form>
        </div>
      </MainContainer>
    );
  }
};

export default SignUp;

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
const ContainerHead = styled.div`
  padding-top: 13px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
const Form = styled.form`
  /* @media (max-width: 460px) {
    width: 100%;
    min-width: 200px;
  } */
`;
const GoToSignin = styled.div`
  cursor: pointer;
`;
const UserNameDiv = styled.div`
  /* margin-top: 10px !important; */
`;
const Exclamation1 = styled(ErrorIcon)`
  position: absolute;
  right: 13px;
  cursor: pointer;
  outline: none;
  top: 7px;
  color: #b40000;
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

