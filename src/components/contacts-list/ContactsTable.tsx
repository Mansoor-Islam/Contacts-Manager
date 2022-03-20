import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import { useState, useEffect, FC } from "react";
import { fetchContacts, deleteContact } from "../../service/api";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { useHistory } from "react-router-dom";

const tablHeadStyles = {
  fontSize: "15px",
  fontWeight: 800,
  color: "#fff",
};

const ContactsTable: FC = () => {
  const history = useHistory();

  const [contacts, setContacts] = useState<any[]>([]);

  const getAllContacts = async () => {
    const resp = await fetchContacts();
    setContacts(resp.data);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteContactInfo = async (id: any) => {
    await deleteContact(id);
    getAllContacts();
  };

  return (
    <TableContainer component={Paper} sx={{ my: 7 }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#2A6AF9" }}>
          <TableRow>
            <TableCell style={tablHeadStyles}>Id</TableCell>
            <TableCell style={tablHeadStyles}>Name</TableCell>
            <TableCell style={tablHeadStyles}>Phone</TableCell>
            <TableCell style={tablHeadStyles}>Email</TableCell>
            <TableCell style={tablHeadStyles}>City</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{contact.id}</TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.city}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <IconButton
                      onClick={() =>
                        history.push(`/edit-contact/${contact.id}`)
                      }
                    >
                      <BorderColorRoundedIcon
                        fontSize="small"
                        sx={{
                          color: "#6B7280",
                          mr: {
                            xs: 2,
                            md: 0,
                          },
                        }}
                      />
                    </IconButton>
                    <IconButton onClick={() => deleteContactInfo(contact.id)}>
                      <CancelSharpIcon
                        fontSize="small"
                        sx={{ color: "#DA6868" }}
                      />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
