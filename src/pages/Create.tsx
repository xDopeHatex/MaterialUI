import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <Button
        variant="contained"
        type="submit"
        color="secondary"
        onClick={() => console.log("click")}
        endIcon={<KeyboardArrowRight />}
      >
        submit
      </Button>
      <br />
    </Container>
  );
}
