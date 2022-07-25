
import Head from 'next/head'


import { Typography } from '@mui/material'
import {Container} from '@mui/material'
import {Box }from '@mui/material'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
export default function Home () {
  return (
      <Box>
          <Head>

           <title>Sophine Brittain</title>
          </Head>
          <Header/>
          
          <Container  sx={{display:"flex",bottom:"20px",padding:"60px",justifyContent:"space-between"}}>
              <img src="/Frame 11852.webp" alt="home"  height={500} />
              <Box >
               <Typography sx={{fontSize:"60px",
                   paddind:"4px",
                   alignItems:"center",
                   margin:"100px",
                   fontFamily:"cursive",
                   color:"red",
   }} >
                Hello!
               </Typography>
                  <Typography  variant="h3">
                       I'm Sophie, a 
                       product designer 
                       based 
                       in New York.
               </Typography>
               </Box>
           </Container>
          <hr/>
       <Container sx={{padding:"50px"}}>
       <Box sx={{display:"flex",justifyContent:'space-between',alignItems:"center",margin:"20px",padding:"50px"}}>
         
       <Typography variant="h2">
               Kai   
      </Typography>
       <Typography variant='h6'>
               After Kia’s global re-brand, we reimagined
               Kia Canada’s website from an entirely 
               new perspective.
      </Typography>
        </Box>
          <img src="/kiahomenew.webp" alt="kai" height={500} />
           </Container>
          <hr/>
          <Container sx={{padding:"50px"}}>
        
      <Box sx={{display:"flex",justifyContent:'space-between',alignItems:"center",padding:"50px"}}>
      <Typography variant="h2">
    Cadillac Fairview
      </Typography>
      <Typography variant="h6">
      As a top commercial real estate company, 
      we consolidated multiple sites for better 
      brand consistency and accessibility.
     </Typography>
     </Box>
          <img src="/cfhome.webp" alt="home" height={500}/>
      </Container>
       <hr/>
      <Container sx={{ padding:"60px"}}>
        <Box sx={{ display:"flex",justifyContent:'space-between',alignItems:"center",margin:"20px",padding:"50px"}} >
        <Typography variant='h2'>
          Agriculture, Redefined
        </Typography>
        <Typography variant='h6'>
             With agriculture continuing to transition 
             into a digital space,the creation of an 
             authenticated portal integrates all 
             information a farmer would need.
        </Typography>
        </Box>
        
        <img src="/Frame 7221 NEW.webp" alt="project" height={500}/>
        </Container>
        <hr/> 
        <Footer/>
    </Box>
  )
}
