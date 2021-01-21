import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Ul = styled.ul `   
margin-left: auto;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
`
const Nav = styled.nav`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding: 10px 10px 10px 10px;
    }
    @media (max-width: 1024px){
    display: none;
}
`;

const NavLink = styled(Link)`
    color: #ffffff;
    padding-left: 31px;
    padding-right: 31px;
    padding-top: 18px;
    padding-bottom: 18px;
    font-family: "Montserrat", Sans-serif;
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 20px;
    position: relative;
    &.current {
        border-bottom: 2px solid #FFF;
    }
    &:hover {
        border-bottom: 4px solid #FFF;
    }
`;

const  Navigation = () => {
    return ( 
        <Nav>
            <Ul>
            <NavLink
                to={'/'}
                activeClassName="home"
            >Home</NavLink>
            <NavLink 
                to={'/about'}
                activeClassName="current"
            >About</NavLink>
            <NavLink
                to={'/services'}
                activeClassName="current"
            >Services</NavLink>
               <NavLink
                to={'/testimonials'}
                activeClassName="current"
            >Testimonials</NavLink>
             <NavLink
                to={'/testimonials'}
                activeClassName="current"
            >Contact</NavLink>
            </Ul>
        </Nav>

     );
}
 
export default  Navigation;