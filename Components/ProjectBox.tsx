import { Typography, Box, Container ,Button} from "@mui/material";
import {Link} from "@mui/material";

export default function ProjectBox({
  title,
  description,
  imgPath,
  testLink,
  repoLink,
  videoLink,
}: {
  title: string;
  description: string;
  imgPath: string;
  testLink: string
  repoLink: string
  videoLink: string
}) {
  return (
    <Container sx={{ padding: "50px" , alignItems:"center"}}>
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
      <Box sx={{ display:"flex", justifyContent:"space-around",}}>
      <Box>
      <img src={imgPath} alt="kai" height={500} />
      </Box>
  
       <Box sx={{ display:"flex", flexDirection:"column",justifyContent:"center",}}>
        <Button
          onClick={() => window.open(testLink)}
          size="large"
          color="primary"
          
        >
          Test Link
        </Button>
        <Button
          onClick={() => window.open(repoLink)}
          size="large"
          color="primary"
        >
          Repository
        </Button>
        <Button
          onClick={() => window.open(videoLink)}
          size="large"
          color="primary"
        >
          Video
        </Button>
      </Box>
      </Box>
      <hr/>
    </Container>
  );
}
