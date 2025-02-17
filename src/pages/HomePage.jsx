import { Container, Typography, Box, Paper } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Your Comprehensive Digital Address Book
          </Typography>
          <Typography variant="body1" paragraph>
            Keep your connections close and your memories even closer. Start
            organizing your contacts in a smarter, more efficient way today.
            Cherish every moment, reconnect with old friends, and build new
            relationships through our intuitive platform.
          </Typography>
          <Typography variant="body1" paragraph>
            Explore the features that help you simplify your communications and
            enhance your networking experience. Join us and transform the way
            you manage your personal and professional connections.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;
