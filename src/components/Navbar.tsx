import { FC } from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              pl: 1,
              pb: 0.5,
              color: "#FBF9FA",
              fontWeight: 700,
              textDecoration: "none",
              display: { md: "flex" },
            }}
          >
            Contacts Manager
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
