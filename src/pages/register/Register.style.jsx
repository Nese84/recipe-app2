import styled from "styled-components";
import Flex from "../../style/Flex";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 30rem;
  height: 45rem;
  max-width: 50rem;
  background: rgba(122, 136, 137, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 1rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: #c11111;
  font-size: 2.4rem;
  span{
    color: white;
  }
`;

export const StyledInput = styled.input`
  height: 2rem;
  font-size: 1rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 1.2rem;
  display: flex;
  width: 15rem;
  align-items: center;
  justify-content: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  padding: 0.4rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    background-color: red;

  }
`;

export const StyledImg = styled.img`
  width: 100px;
  filter:drop-shadow(0 0 20px red);
  /* box-shadow: 0 0 20px red; */
`;
