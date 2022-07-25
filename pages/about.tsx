import {Box} from "@mui/system";
import { Typography } from '@mui/material';
import  Header  from '../Components/Header';
import Footer from '../Components/Footer';


export default function About () {

  return (
      
     <Box>
      <Header />
     
      <Box sx = {{ 
        display: "flex",
        justifyContent:"space-between",
        paddingTop:"20px"
         }}>
       
       
        
          <Typography variant="h4" fontStyle="inherit" marginLeft="10%"> 
          I'm Sophie, a product designer based in New York.
                   <span >Hi there! I was born and raised in Houston
                   (no, I don’t have an accent), and am currently based in New York      
                   . My main expertise lies in product design, though 
                   I do dabble in logo design and illustration. If you like my site, don’t hesitate to reach out!</span>
            </Typography>
           <Typography variant="h4" marginLeft="20%" > 
                 
            <span> What I like</span>
             Making Playlists
             Auto-layout
             Digital Collections
             <span>What I'm learning</span>
            <span >Tennis
             한국어
             Latte Art
             Procreate</span>
             <span >Recognition</span>
             10 Best UX Portfolios and What We Can Learn from Them
             Cool Portfolio Websites that Stand Out of the Crowd
             10 UX Design Portfolios
             The Best Sites for Building your Design Portfolio
             10+ UX Design Portfolio Examples
           </Typography>
           
        </Box>
        <Footer/>
    </Box>          
    
  )
}
