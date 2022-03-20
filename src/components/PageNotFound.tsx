import Lottie from "react-lottie";
import animationData from "../lotties/error-animation.json";
import { Box } from "@mui/material";

export const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box sx={{ mt: 7 }}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Box>
  );
};
