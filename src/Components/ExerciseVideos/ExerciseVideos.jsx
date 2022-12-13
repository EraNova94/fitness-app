import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{ marginTop: { lg: "60px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        flexDirection="row"
        sx={{
          flexDirextion: { xs: "column" },
          gap: { lg: "80px", xs: "20px" },
        }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h5" color="#000" fontWeight="bold">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
