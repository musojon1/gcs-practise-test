import { Typography } from "@mui/material";
import { NavContainer } from "./style";

function Navbar() {
  return (
    <NavContainer>
      <Typography>Bookshelf</Typography>
      <Typography>Name</Typography>
    </NavContainer>
  );
}

export default Navbar;
