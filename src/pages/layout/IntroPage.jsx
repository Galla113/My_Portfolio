import { Box, Button } from "@mui/material";
import BalatroBG from "../../components/layout/AnimatedBackgrounds";

export default function IntroPage() {

  return (
    <Box  //Main Box
      sx={{
        zIndex: 1,
        width: '100%',
        height: '100vh',
        overflow: "hidden",
      }}
    >
      <BalatroBG/>  {/* BG1 */}
      <Box    //Sub-Box 1
        sx={{
          position: "absolute",
          top: 0, left: 0,
          width: "50%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </Box>
    </Box>
  )
}
