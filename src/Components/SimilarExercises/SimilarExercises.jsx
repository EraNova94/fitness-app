import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
import Loader from "../Loader/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: {
          lg: "10px",
          xs: "0",
        },
      }}>
      <Typography
        my={5}
        sx={{
          fontSize: { lg: "36px", xs: "20px" },
        }}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        my={5}
        sx={{
          fontSize: { lg: "36px", xs: "20px" },
        }}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
