import { Container ,Box ,Typography} from "@mui/material";
import Header from "./Header";




export default function PersonBox({
    imgPath,
    title,
    quality,
    description,
    
  }: {
    title: string;
    description: string;
    imgPath: string;
    quality: string;
  }) {
    return (
        
        

        <Container sx={{ alignItems: "center",margin: "20rpm 0",
        paddingX:"0 10rpm",}}>
             <img src={imgPath} alt="kai"  />
        
        
          <Typography variant="h4" fontFamily="fantasy">{title}</Typography>
          <Typography variant="h6" fontFamily="monospace">{quality}</Typography>
          <Typography variant="body1" fontFamily="cursive">
            {description}
          </Typography>
        
        
        
      </Container>
      
    );
  }