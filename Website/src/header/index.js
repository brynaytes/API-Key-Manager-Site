import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/keyInfo" activeStyle>
                        keyInfo
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        home
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        login or sing up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;