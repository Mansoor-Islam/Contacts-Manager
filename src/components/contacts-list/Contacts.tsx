import { FC, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ContactsTable from "./ContactsTable";

const Contacts: FC = () => {
  useEffect(() => {
    document.title = "Home | Contacts Manager";
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            sm: "space-between",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          Contact List
        </Typography>
        <Button
          component={Link}
          to="/add-contact"
          variant="contained"
          startIcon={<AddRounded />}
          sx={{
            mb: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          Add New Contact
        </Button>
      </Box>

      <ContactsTable />
    </Container>
  );
};

export default Contacts;
