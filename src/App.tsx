import AddContact from "./components/AddContact";
import Contacts from "./components/contacts-list/Contacts";
import Navbar from "./components/Navbar";
import EditContact from "./components/EditContact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A6AF9",
    },
  },
});

const App = () => {
  return (
    <Box sx={{ m: 0 }}>
      <Toaster position="top-center" />

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add-contact" component={AddContact} />
            <Route exact path="/edit-contact/:id" component={EditContact} />

            <Route component={PageNotFound} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
};

export default App;
