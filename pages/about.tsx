import {Box} from "@mui/system";
import { Container, Typography } from '@mui/material';
import  Header  from '../Components/Header';
import Footer from '../Components/Footer';


export default function About () {

  return (
      
     <Box>
         <Header />
            <Container>
                <Box sx = {{ 
                    display: "flex",
                    justifyContent:"space-between",
                    paddingTop:"30px",
                    paddingLeft:"40px",
                    paddingBottom:"100px",
        
                         }}>
                     <img src="/npunk.png" alt="home" height="500px" />
         
                        <Typography variant="h4" paddingLeft="20px" color="red">NPUNK #3076</Typography>
                           <Typography variant="h6" justifyContent="initial"paddingTop="40px"fontStyle="bold">
                              Akuma Dragonz are an exclusive collection of 10,000 Akuma 
                              Dragonz are the sister collection of Boryoku Dragonz on the  Solona blockhain ,
                              building cross-chine
                          </Typography> 
            
              </Box>
           </Container>
            <hr/>
        <Footer/>
    </Box>          
    
  )
}
