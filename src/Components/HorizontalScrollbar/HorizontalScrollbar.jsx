import React, { useState } from "react";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import BodyPart from "../BodyPart/BodyPart";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 300, sm: 600, md: 900, lg: 1100, xl: 1400 } }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        aria-label="scrollable prevent tabs example"
        className="scroll-bar">
        {data.map(item => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 10px">
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default HorizontalScrollbar;
