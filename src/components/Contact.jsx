import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Stack, Box, IconButton, Icon } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", p: "2rem" }}
      >
        <a href="https://www.linkedin.com/in/olivia-lam-b77354193/">
          <LinkedInIcon sx={{ width: "50px", height: "50px" }} />
        </a>
        <a href="mailto:awlolivia@gmail.com">
          <EmailIcon sx={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://github.com/lamolivia">
          <GitHubIcon sx={{ width: "50px", height: "50px" }} />
        </a>
      </Stack>
    </Box>
  );
};

export default Contact;
