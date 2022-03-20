import { FC, useEffect } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useHistory } from "react-router-dom";
import { addNewContact } from "../service/api";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

interface AddContactProps {
  name: string;
  phone: string;
  email: string;
  city: string;
}

const AddContact: FC = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "Add New Contact | Contacts Manager";
  }, []);

  const formik: FormikProps<AddContactProps> = useFormik<AddContactProps>({
    initialValues: {
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
        await addNewContact(values);
        toast.success("New Contact Saved!", {
          duration: 1500,
          style: {
            fontFamily: "sans-serif",
          },
        });
        history.push("/");
      } catch (error) {
        toast.error("Error", {
          duration: 1500,
          style: {
            fontFamily: "sans-serif",
          },
        });
      }
    },
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
            Add New Contact
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
              Save Contact
            </Button>
          </Box>
        </Container>
      </form>
    </Box>
  );
};

export default AddContact;
