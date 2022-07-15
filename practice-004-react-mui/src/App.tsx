import { Box } from "@mui/material";
import Combinations from "./components/combinations";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Combinations />
    </Box>
  );
};

export default App;
