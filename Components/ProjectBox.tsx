import { Typography, Box, Container } from "@mui/material";

export default function ProjectBox({
  title,
  description,
  imgPath,
}: {
  title: string;
  description: string;
  imgPath: string;
}) {
  return (
    <Container sx={{ padding: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
          padding: "50px",
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h5" fontStyle="inherit">
          {description}
        </Typography>
      </Box>
      <img src={imgPath} alt="kai" height={500} />
      <hr />
    </Container>
  );
}
