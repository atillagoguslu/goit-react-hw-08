import { Box, Typography, Button } from "@mui/material";

const UserMenu = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" color="inherit">
        Welcome, user
      </Typography>
      <Button variant="outlined" color="inherit" size="small">
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
