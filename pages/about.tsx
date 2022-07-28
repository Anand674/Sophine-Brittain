import {Box} from "@mui/system";
import  Header  from '../Components/Header';
import Footer from '../Components/Footer';
import PersonBox from '../Components/PersonBox'

import { Typography } from "@mui/material";

export default function About () {

  return (
      
     <Box>

        
         <Header />
         <Typography sx={{ display:"flex",fontSize:"60px",justifyContent:"center",fontFamily:"Crimson",fontWeight:"bolded"}}>
            MEET THE TEAM
         </Typography>
         <Box sx={{ display:"flex",justifyContent:"center"}}>
            <PersonBox
            imgPath='/imged.jpeg'
            title="GEOFFREY FULLER"
            quality="President"
            description="Geoffrey met Emily when he was her Ad-Sales client.
            The rest (a company, three cats, and a daughter)is history. When he isn't handling the 
            business side of the brand ,he's either in the Kitchen or biking up 
             a mountain."
        
            />
            <PersonBox
             imgPath='/ladyimg.jpeg'
            title="LAUREN EVELYN"
            quality="Social Media Coordinator"
            description="An Atlants native, Lauren's our East Coast city gal and Georgia
            Peach. A grephic designer by trade with a passion for photography, she can almost always be 
            spotted out and about with her film or  digital camera an hand.
            if you enjoy travel, photography, vintage-inspired fashion,
            and old music,you'll get almost just great"
        
            />
            <PersonBox
            imgPath='/boss.jpeg'
            title="JESS KANE"
            quality="Social Media Manager"
            description="Jess is a cat lady,L.A.native, and Francophile who's always
            on the hunt for the most instagrammable spot in town.
            if you're a fan of gluten, SVU,New Yark City, Harry Potter, or anything involving breakfast
            food she'd love to be friends. "
          
            />
            </Box>
            <Box sx={{ display:"flex",justifyContent:"center"}}>
            <PersonBox
            imgPath='/imgdi.jpeg'
            title="LISA GREELEY"
            quality="Retail Buyer"
            description=" Southern california native Lisa is a total sports addict.
            The rest (a company, three cats, and a daughter)is history. When he isn't handling the 
            business side of the brand ,he's either in the Kitchen or biking up 
             a mountain and can spend time in the sun, preferably with a glass of wine
             in hand."
        
            />
            <PersonBox
             imgPath='/imgpi.jpeg'
            title="KELLY JOHNSON"
            quality="Marketing Manager"
            description="A native of(much colder) midwestern weather.kelly has  grephic designer by trade with a passion for photography, she can almost always be 
            spotted out and about with her film or  digital camera an hand.
            if you enjoy travel, photography, vintage-inspired fashion,
            and old music,you'll get almost just great working wandering the aisles of Target."
        
            />
            <PersonBox
             imgPath='/imgsi.jpeg'
            title="CASS VENZONE"
            quality="Markiting Coordinator"
            description="A tropical girl at heart, Cass moved to L.A two years ago  and Francophile who's always
            on the hunt for the most instagrammable spot in town.
            if you're a fan of gluten, SVU,New Yark City, Harry Potter, or anything involving breakfast
            food she'd love to be friends. "
          
            />
            </Box>
            
        <Footer/>
    </Box>          
    
  )
}
