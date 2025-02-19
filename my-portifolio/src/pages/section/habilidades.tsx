import { styled, Grid2, Container, Typography} from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"

function Skills() {

    const StyledSkills = styled("div")(({theme})=> ({

        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"

    }))

    return(
        <>
        <NavBar />
        <StyledSkills>
            <Container>
                <Grid2 container  direction="column"   sx={{ justifyContent: "space-between", alignItems: "center"}} >
                       <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}> Habilidades  </Typography>
                       <Typography color="primary.contrastText" variant="h4" textAlign="center"> Teste  </Typography>                      
                </Grid2>
            </Container>
        </StyledSkills>
      </>
    )
  }
  
  export default Skills