import { Stack, Typography, Box, Avatar, Button } from "@mui/material";
import { useWindowContext } from "../WindowProvider";
import { ReactTyped } from "react-typed";
import { useState } from "react";

const aboutMe =
  "Hello there! I am a Masters student at Northeastern University studying information design. " +
  "I graduated with my Bachelor's in Cognitive Systems: Computational Intelligence & Design doing " +
  "computer science and psychology. My current interests lie in user research and data visualizations, " +
  "in particular the intersection between the two: how to make data accesible and understandable to diverse audiences.";

const About = () => {
  const windowCtx = useWindowContext();
  const isVert = windowCtx.w <= 1090;

  const typedName = (
    <Typography
      variant="h1"
      align={!isVert ? "right" : "center"}
      color="text.primary"
    >
      <ReactTyped strings={["Olivia Lam"]} typeSpeed={200} />
    </Typography>
  );

  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      {!isVert && (
        <Stack
          direction="row"
          spacing={20}
          sx={{
            margin: "auto",
            maxWidth: "1280px",
            p: "5%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar
            src="/img/pfp.png"
            sx={{
              width: "300px",
              height: "300px",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
            }}
          />
          <Stack spacing={5}>
            {typedName}
            <Typography
              variant="body1"
              align="left"
              color="text.primary"
              sx={{ fontSize: "18px" }}
            >
              {aboutMe}
            </Typography>
          </Stack>
        </Stack>
      )}
      {isVert && (
        <Stack
          direction="column"
          spacing={5}
          sx={{
            margin: "auto",
            maxWidth: "1280px",
            p: "5%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {typedName}
          <Avatar
            src="/img/pfp.png"
            sx={{
              width: "325px",
              height: "325px",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
            }}
          />
          <Typography
            variant="body1"
            align="left"
            color="text.primary"
            sx={{ fontSize: "18px" }}
          >
            {aboutMe}
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default About;
