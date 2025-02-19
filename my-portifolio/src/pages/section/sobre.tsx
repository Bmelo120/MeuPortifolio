import { styled, Grid2, Container, Typography} from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"


function About() {

    const StyledAbout = styled("div")(({theme})=> ({

        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"

    }))

    return(
        <>
        <NavBar />
        <StyledAbout>
            <Container>
                <Grid2 container  direction="column"   sx={{ justifyContent: "space-between", alignItems: "center"}} >
                       <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}> Sobre Mim  </Typography>
                       <Typography color="primary.contrastText" variant="h4" textAlign="center"> Teste  </Typography>                                    
                    </Grid2>
            </Container>
        </StyledAbout>
      </>
    )
}

export default About