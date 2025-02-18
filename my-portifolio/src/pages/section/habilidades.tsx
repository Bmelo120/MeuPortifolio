import { styled, Grid2, Container, Typography, Box} from "@mui/material"
import myPhoto from "../../img/me.jpg.jpeg"
import DownloadingIcon from '@mui/icons-material/Downloading';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import StyledButton from "../../components/StyledButton/styledButton";
import {AnimatedBackground} from "../../components/AnimatedBackground/AnimatedBackground"

function Hero() {

    const StyleHero = styled("div")(({theme})=> ({

        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"

    }))

    const StyleImg = styled("img")(()=> ({

        width: "70%",
        borderRadius: "50%",
        border: "1px solid #FF00FF"
    }))

    return (
      <>
        <StyleHero>
            <Container>
                <Grid2 container>
                    <Grid2 size={{ xs: 12, md: 5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyleImg src={myPhoto} alt="" />
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 7 }} >
                       <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}> Bárbara G Melo </Typography>
                       <Typography color="primary.contrastText" variant="h4" textAlign="center"> Analista e Desenvolvedora de Sistemas </Typography>                      
                        <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton onClick={() => console.log("baixou")}> 
                                    <DownloadingIcon/> 
                                        <Typography> 
                                            Download CV
                                        </Typography> 
                                </StyledButton>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton onClick={() => console.log("ola")}> 
                                    <ForwardToInboxIcon/> 
                                        <Typography>
                                            Contato 
                                        </Typography>
                                    </StyledButton>
                            </Grid2>
                        </Grid2>                    
                    </Grid2>
                </Grid2>
            </Container>
        </StyleHero>
      </>
    )
  }
  
  export default Hero