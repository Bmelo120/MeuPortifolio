import { styled, Grid2, Container, Typography} from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"


function Projects () {
    const StyledProjects = styled("div")(({theme})=> ({

        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"

    }))

    return(
        <>
        <NavBar />
        <StyledProjects>
            <Container>
                <Grid2 container  direction="column"   sx={{ justifyContent: "space-between", alignItems: "center"}} >
                       <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}> Meus Projetos  </Typography>
                       <Typography color="primary.contrastText" variant="h4" textAlign="center"> Teste  </Typography>                      
                </Grid2>
            </Container>
        </StyledProjects>
      </>
    )
}

export default Projects