import Head from "next/head";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProjectBox from "../Components/ProjectBox";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Web3Werx</title>
      </Head>
      <Header />

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src="/webwerx.png" alt="home" height={600} />
        <Box>
          <Typography
            sx={{
              fontSize: "60px",
              paddind: "4px",
              alignItems: "center",
              margin: "40px",
              fontFamily: "cursive",
              color: "red",
            }}
          >
            Hello!
          </Typography>
          <Typography variant="h4">
            We are Web3Werx product designer blochain de
          </Typography>
        </Box>
      </Container>
      <hr />
      


      <ProjectBox
        title="NEWFY"
        description="A collection of 10,000 Dragon NFTs an the Ethereum blockchain"
        imgPath='/raffle.png'
        testLink= "http://vevue.io/"
        repoLink="https://github.com/Solid8/codeeer_nft.git"
        videoLink="https://drive.google.com/file/d/1LweuuJYvrjRwTTWWrTkHTH-kC3ExYKyw/view?usp=sharing"
      />
 
      <ProjectBox
        title="NFT'S"
        description="As a you can buy the NFT's purchase codeeer nfts in this page."
        imgPath='/codeeer.png'
        testLink= "http://vevue.io/"
        repoLink="https://github.com/Solid8/codeeer_nft.git"
        videoLink="https://drive.google.com/file/d/1LweuuJYvrjRwTTWWrTkHTH-kC3ExYKyw/view?usp=sharing"
      />

  
      <ProjectBox
        title="THE DONS"
        description=" A collcetion of 3,5000 Mafia Bosses coming to take over NEAR
        protocal. Blood Makes you related . Layout makes you family."
        imgPath='/thedon.jpg'
        testLink= "http://vevue.io/"
        repoLink="https://github.com/Solid8/codeeer_nft.git"
        videoLink="https://drive.google.com/file/d/1LweuuJYvrjRwTTWWrTkHTH-kC3ExYKyw/view?usp=sharing"
      />
  
      <Footer />
    </Box>
  );
}
