import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav> 
            <Logo href="">
                SP <span>HCI</span>
            </Logo>
            <Hamburger onClick={ () => setIsOpen(!isOpen) }> 
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>               
                <Link to="/"><MenuLink>Home</MenuLink></Link>
                <Link to="/systems"><MenuLink>Systems</MenuLink></Link>
                <Link to="/models"><MenuLink>Cognitive Models</MenuLink></Link>
                <Link to="/about"><MenuLink>About</MenuLink></Link>
                <Link to="/contact"><MenuLink>Contact</MenuLink></Link>
                <Link to="/login"><MenuLink>Login</MenuLink></Link>
                {/* <MenuLink href="">Home</MenuLink>*/}
            </Menu>
        </Nav>
  )
}

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #04b0c6;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #020024;
        margin-bottom: 4px;
        corder-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }

`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
        transition: max-height 0.3s ease-in;
    };
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #020024;
    transition: all 0.3s ease-in;
    font-size: 1rem;
    &:hover {
        color: #00d4ff;
    }
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #020024;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
// import "../Styles/NavBar.css";

// function NavBar() {
//   const [openLinks, setOpenLinks] = useState(false);

//   const toggleNavbar = () => {
//     setOpenLinks(!openLinks);
//   };
//   return (
//     <div className="navbar">
//       <div className="leftSide" id={openLinks ? "open" : "close"}>
//         <div className="hiddenLinks">
//           <Link to="/"> Home </Link>
//           <Link to="/systems"> Systems </Link>
//           <Link to="/about"> About </Link>
//           <Link to="/contact"> Contact </Link>
//         </div>
//       </div>
//       <div className="rightSide">
//         <Link to="/"> Home </Link>
//         <Link to="/systems"> Systems </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/contact"> Contact </Link>
//         <button onClick={toggleNavbar}>
//           <ReorderIcon />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NavBar;