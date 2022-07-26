import Head from "next/head";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
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
              margin: "50px",
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
          <Typography variant="h2">NFWFY</Typography>
          <Typography variant="h5" fontStyle="inherit">
            A collection of 10,000 Dragon NFTs an the Ethereum blockchain
          </Typography>
        </Box>
        <img src="/raffle.png" alt="kai" height={500} />
      </Container>
      <hr />
      <Container sx={{ padding: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Typography variant="h2">NFTs</Typography>
          <Typography variant="h5" fontStyle="revert">
            As a you can buy the NFTs purchase codeeer nfts in this page.
          </Typography>
        </Box>
        <img src="/codeeer.png" alt="home" height={500} />
      </Container>
      <hr />
      <Container sx={{ padding: "60px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Typography variant="h2">The Dons</Typography>
          <Typography variant="h5" fontStyle="inherit">
            A collcetion of 3,5000 Mafia Bosses coming to take over NEAR
            protocal. Blood Makes you related . Layout makes you family.
          </Typography>
        </Box>

        <img src="/thedon.jpg" alt="project" height={500} />
      </Container>
      <hr />
      <Footer />
    </Box>
  );
}
