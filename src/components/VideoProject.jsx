import { Stack, Stepper, Step, StepButton, Box } from "@mui/material";
import { useWindowContext } from "../WindowProvider";
import { useState, useEffect } from "react";

const frameScale = (windowCtx) => {
  const winW = windowCtx.w;
  if (winW >= 690) {
    return 1;
  } else {
    return (0.6 / 350) * winW;
  }
};

const VideoProject = ({ width, height, src, name, imgList }) => {
  const [activeStep, setActiveStep] = useState(0);
  const windowCtx = useWindowContext();
  const stepCount = imgList.length + 1;
  const scale = frameScale(windowCtx);

  const video = (
    <iframe
      width={scale * width}
      height={scale * height}
      src={src}
      title="Youtube Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );

  const image = (path) => {
    return <img width={scale * width} height={scale * height} src={path} />;
  };

  return (
    <Stack spacing={2}>
      {activeStep != stepCount - 1 && image(imgList[activeStep])}
      {activeStep == stepCount - 1 && video}
      <Stepper nonLinear activeStep={activeStep}>
        {[...Array(stepCount).keys()].map((index) => (
          <Step key={`${name}-${index}`}>
            <StepButton
              onClick={() => {
                setActiveStep(index);
              }}
            />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default VideoProject;
