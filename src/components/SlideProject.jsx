import { Stack, Stepper, Step, StepButton, Box } from "@mui/material";
import { useWindowContext } from "../WindowProvider";
import { useState } from "react";

const frameScale = (windowCtx) => {
  const winW = windowCtx.w;
  if (winW >= 690) {
    return 1;
  } else {
    return (0.6 / 350) * winW;
  }
};

const SlideProject = ({ width, height, src, name, imgList }) => {
  const [activeStep, setActiveStep] = useState(0);
  const windowCtx = useWindowContext();

  const hasVideo = (src != undefined);

  const stepCount = hasVideo ? imgList.length + 1 : imgList.length;
  const scale = frameScale(windowCtx);

  const video = (path) => {
    return <iframe
      width={scale * width}
      height={scale * height}
      src={path}
      title="Youtube Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>;
  }

  const image = (path) => {
    return <img width={scale * width} height={scale * height} src={path} />;
  };

  let compList = imgList.map((path) => image(path));
  if (hasVideo) compList.push(video(src));

  return (
    <Stack spacing={2}>
      {compList[activeStep]}
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

export default SlideProject;
