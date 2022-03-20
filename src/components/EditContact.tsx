import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useHistory, useParams } from "react-router-dom";
import { editContact, fetchContacts } from "../service/api";
import { FormikProps, useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

interface EditContactProps {
  name: string;
  phone: string;
  email: string;
  city: string;
}

interface RouteParams {
  id: string;
}

const initialData = {
  name: "",
  phone: "",
  email: "",
  city: "",
};

const EditContact: FC = () => {
  const history = useHistory();

  const { id } = useParams<RouteParams>();

  const [contactDetails, setContactDetails] = useState(initialData);

  const loadContactDetails = async () => {
    const resp = await fetchContacts(id);
    setContactDetails(resp.data);
  };

  useEffect(() => {
    loadContactDetails();
  }, []);

  useEffect(() => {
    document.title = "Edit Contact | Contacts Manager";
  }, []);

  const formik: FormikProps<EditContactProps> = useFormik<EditContactProps>({
    initialValues: contactDetails || {
      name: "",
      phone: "",
      email: "",
      city: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string().required("Email is required"),
      city: Yup.string().required("City is required"),
    }),

    onSubmit: async (values) => {
      try {
        await editContact(id, values);
        toast.success("Contact Details Updated!", {
          duration: 1500,
          style: {
            fontFamily: "sans-serif",
          },
        });
        history.push("/");
      } catch (error) {
        toast.error("Error!", {
          duration: 1500,
          style: {
            fontFamily: "sans-serif",
          },
        });
      }
    },

    enableReinitialize: true,
  });

  return (
    <Box>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4, cursor: "pointer" }}>
            <Box sx={{ my: 4 }}>
              <Box
                component={Link}
                to="/"
                color="textPrimary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <ArrowBackOutlinedIcon
                  fontSize="small"
                  sx={{ mr: 1, color: "#6B7280" }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#000",
                    fontSize: "15px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Contacts
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="h4" sx={{ fontSize: "30px" }}>
            Edit Contact Details
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            required
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            sx={{
              mt: 4,
            }}
            inputProps={{
              style: { textTransform: "uppercase" },
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            required
            error={Boolean(formik.touched.phone && formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            sx={{
              mt: 3,
            }}
            inputProps={{
              style: { textTransform: "uppercase" },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            required
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            sx={{
              mt: 3,
            }}
            inputProps={{
              style: { textTransform: "uppercase" },
            }}
          />

          <TextField
            fullWidth
            label="City"
            name="city"
            required
            error={Boolean(formik.touched.city && formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
            sx={{
              mt: 3,
            }}
            inputProps={{
              style: { textTransform: "uppercase" },
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              sx={{ width: "50%", mt: 4 }}
            >
              Update Contact
            </Button>
          </Box>
        </Container>
      </form>
    </Box>
  );
};

export default EditContact;
