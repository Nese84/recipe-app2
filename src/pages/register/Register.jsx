import React, { useState } from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Register.style";

import woman from "../../assets/woman.svg";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/GoogleIcon";
const Register = ({  setIsLogin }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    sessionStorage.setItem("user", user);
    e.preventDefault();
    setIsLogin(true);

    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={woman} width="10px" />
        <Header>
          {"<Zeynep/>"}
          <span>Recipe</span>
        </Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Enter UserName"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <StyledInput
            placeholder="Enter Email"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <StyledInput
            placeholder="Enter Password"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <StyledInput placeholder="Enter Password" type="password" required />
          <StyledButton type="submit">Register</StyledButton>
          <StyledButton
            type="button"
            // onClick={() => signUpProvider()}
          >
            <GoogleIcon color="currentColor" width="30px" style={{marginRight: "1rem"}}/>
            Continue with Google
            
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
