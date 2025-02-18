import { styled } from "@mui/material";
import { Link } from "react-router-dom";


export function NavBar() {

    const Stylediv = styled("div")(({theme})=> ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.primary.main,
        alignItems: "center"
    }))

    return (
        <Stylediv>
            <MenuItem texto="Sobre" url="/sobre"/>
            <MenuItem texto="Projetos" url="/projetos"/>
            <MenuItem texto="Habilidades" url="/habilidades"/>
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
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
    }))
    return(
        <StyledButton to={props.url} >
            {props.texto} 
        </StyledButton>
    )
}

export default NavBar