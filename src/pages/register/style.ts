import styled from "@emotion/styled";

import bgImage from "../../assets/imgs/bg.jpg";
import { Box, Button, TextField } from "@mui/material";

export const RegisterContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${bgImage})`,
}));

export const StyledBox = styled(Box)(() => ({
  width: 400,
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "15px",
}));



export const StyledButton = styled(Button)(() => ({
  width: "100%",
  borderRadius: "12px",
  color: "primary",
}));
