import { Box } from "@mui/material"
import {Link} from "@mui/material"


export default function Footer () {
    return  (


 <Box sx={{ 
    display:"flex", 
     paddingTop: "40px",
    alignItems: "center",
    margin: "20px",
    fontSize:"50px",
    fontFamily:"cursive",
    
    }}>
    contact
  
  <Box>
  <ul>
     <Link sx={{margin:"10px",fontSize:"20px"}} href="/">Linkedln</Link>
     <Link sx={{margin:"10px",fontSize:"20px"}} href="/">Email</Link>
     <Link sx={{margin:"10px",fontSize:"20px"}} href="/">resume</Link>
  </ul>
  </Box>
</Box>
    )

};