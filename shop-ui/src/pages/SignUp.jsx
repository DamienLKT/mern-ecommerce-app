import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../api/requestMethod";
import FormInput from "../components/FormInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  background-color: white;
  padding: 0px 60px;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: rgb(77, 1, 77);
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      delete values.confirmPassword;
      const res = await publicRequest.post(
        "/auth/register",
        JSON.stringify(values),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      navigate("/");
    } catch (err) {}
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // delete values.confirmPassword;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default App;
