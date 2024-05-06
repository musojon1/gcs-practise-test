import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Main = styled("main")(() => ({
  backgroundColor: "transparent",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "12px",
  },
}));
