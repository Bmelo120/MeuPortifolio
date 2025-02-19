import { styled, Grid2, AppBar } from "@mui/material";
import { Link } from "react-router-dom";


export function NavBar() {

    const Stylediv = styled("div")(({theme})=> ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.primary.main,
        alignItems: "center",
    }))

    return (
        <Stylediv>
            <AppBar position="absolute">
                <Grid2 container direction="row-reverse" sx={{ justifyContent: "space-around", alignItems: "baseline" }} spacing={4} columns={24}>                
                     <MenuItem texto="Habilidades" url="/habilidades"/>               
                    <MenuItem texto="Sobre" url="/sobre"/>               
                    <MenuItem texto="Projetos" url="/projetos"/>               
                    <MenuItem texto="Home" url="/"/>          
                </Grid2>
            </AppBar>
        </Stylediv>
    );
}

export function MenuItem( props:any) {

    const StyledButton = styled(Link)(({theme}) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        border: "none",
        fontFamily: "Avignon Pro",
        fontSize: "16px",
        borderRadius: "4px",
        textDecoration: "none",
        padding: "10px 20px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            
        },
    }))
    return(
        <StyledButton to={props.url} >
            {props.texto} 
        </StyledButton>
    )
}

export default NavBar