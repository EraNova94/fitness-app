import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="body-part-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderRadius: "8px",
        backgroundColor: "#fff",
        width: { lg: "240px", xs: "115px" },
        height: { lg: "280px", xs: "150px" },
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}>
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        sx={{ fontSize: { lg: "24px", xs: "14px" } }}
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
