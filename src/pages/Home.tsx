import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import Navbar from "../components/Navbar";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Navbar />
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}
