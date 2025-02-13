import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


function NavBar () {

    const StyleToobar = styled(Toolbar)(()=> ({
        display: "flex",
        justifyContent: "space-evenly"

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyleToobar>
                    <MenuItem> Sobre </MenuItem>
                    <MenuItem> Habilidades </MenuItem>
                    <MenuItem> Projetos </MenuItem>
                </StyleToobar>
            </AppBar>
        </>
    )
}

export default NavBar