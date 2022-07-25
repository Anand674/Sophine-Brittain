import { Box } from "@mui/material"
import {Link} from "@mui/material"

export default function Header () {
    return (
       
        <Box sx={{ fontFamily:"cursive",
        display:"flex",
        padding:"0 10px",
        justifyContent:"space-between"            
                         }}>
                        
            <h1>Sophie Brittain</h1>
        <Box sx={{ display:"flex",
             fontFamily:"cursive",
             fontSize:"20px",
             justifyContent:"space-between",
             margin:"0 22px",
             padding:"20px",  }}>

             <Link sx={{margin:"10px",fontSize:"20px"}} href="/"  >Home</Link>
             <Link sx={{margin:"10px",fontSize:"20px"}} href="/"> Work </Link>
             <Link  sx={{margin:"10px",fontSize:"20px"}}href ="/about">About</Link>
       </Box>
      </Box>
    
   )
};
