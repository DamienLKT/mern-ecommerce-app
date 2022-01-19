import { useState } from "react";
import styled from "styled-components";
import "./FormInput.css";

// const Input = styled.div`
//   padding: 15px;
//   margin: 10px 0px;
//   border-radius: 5px;
//   border: 1px solid gray;  
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px; 
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <input className="loginFormInput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <ErrorMsg>{errorMessage}</ErrorMsg>
    </Container>
  );
};

export default FormInput;
