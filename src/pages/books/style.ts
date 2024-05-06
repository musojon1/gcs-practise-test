import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BooksContainer = styled(Box)(() => ({
  width: "100%",
  height: "calc(100vh - 64px)",
  padding: "20px",
  overflow: "scroll",
}));

export const BookItem = styled(Box)(() => ({
  width: "100%",
  borderRadius: "12px",
  padding: "10px",
  boxShadow: "0px 0px 18px -11px rgba(66, 68, 90, 1)",
  ":hover": {
    cursor: "pointer",
    outline: "1px solid #1976d2",
  },
  img: {
    width: "150px",
  },
}));
