import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { StyledBox, StyledButton, RegisterContainer } from "./style";
import { useRegisterMutation } from "../../services/bookshelf";
import { useNavigate } from "react-router-dom";
import { StyledTextField } from "../../styles";

interface IFormData {
  name: "";
  email: string;
  key: string;
  secret: string;
}

function Register() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    key: "",
    secret: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await register(formData);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken]);

  return accessToken ? null : (
    <RegisterContainer>
      <StyledBox boxSizing="border-box">
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Welcome to the Bookshelf
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Enter your credentials
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <StyledTextField
            value={formData.name}
            onChange={handleInputChange}
            required
            name="name"
            label="Name"
            variant="outlined"
          />
          <StyledTextField
            value={formData.email}
            onChange={handleInputChange}
            required
            name="email"
            label="Email"
            variant="outlined"
          />
          <StyledTextField
            value={formData.key}
            onChange={handleInputChange}
            required
            name="key"
            label="Key"
            variant="outlined"
          />
          <StyledTextField
            value={formData.secret}
            onChange={handleInputChange}
            required
            type="password"
            name="secret"
            label="Secret"
            variant="outlined"
          />
          <StyledButton disabled={isLoading} type="submit" variant="contained">
            Submit
          </StyledButton>
        </form>
      </StyledBox>
    </RegisterContainer>
  );
}

export default Register;
