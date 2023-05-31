import { NavLink } from "react-router-dom";
import { AppBar, Nav, Button } from "./Header.styled";

export const Header = () => {
    return (
        <AppBar>
            <Nav>
                <NavLink to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <Button>
                        Show All
                    </Button>    
                </NavLink>
                <NavLink to="/create" style={{textDecoration: "none", color: "inherit"}}>
                    <Button>
                        Add New Hero
                    </Button>     
                </NavLink>
            </Nav>
        </AppBar>
    )
}