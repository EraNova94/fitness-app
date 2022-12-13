import React from "react";
import { Box, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Grid mt="80px" bgcolor="#000" height="150px">
      <Box
        sx={{ width: { lg: 1300, xs: 300 } }}
        margin="0 auto"
        py="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="10px">
        <span
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}>
          Feel free to contact with us via: <br /> gym.app@gmail.com
        </span>
        <Box>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon color="primary" fontSize="large" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon color="secondary" fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon color="primary" fontSize="large" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <TwitterIcon color="primary" fontSize="large" />
          </a>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
