import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainRoutes from "./routes";

import GlobalStyle from "./styles/global";

import { ToastContainer } from "react-toastify";

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FF577F",
    },
    secondary: {
      main: "#212529",
    },
    typography: {
      fontFamily: ["Inter"].join(","),
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="container">
        <main>
          <GlobalStyle />
          <MainRoutes />
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;
