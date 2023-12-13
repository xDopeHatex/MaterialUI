import { Button, styled } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

const Buttons = () => {
  const BlueButton = styled(Button)({
    backgroundColor: "skyBlue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <BlueButton>My Button</BlueButton>
    </div>
  );
};

export default Buttons;
