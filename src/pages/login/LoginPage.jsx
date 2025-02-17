import { Container, Typography, Box } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <Container maxWidth="sm"> {/* This is a container for the login page with a max width of sm. sm is small screen, also it is a responsive container. And it is a material ui component. It*/}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};



export default LoginPage;
