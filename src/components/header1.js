import React from 'react';
import { Link } from 'gatsby';
import Navigation from './navigation';
import styled from '@emotion/styled';
import { ImLocation } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import globalStyles from '../css/global.module.css';

const Nav = styled.section`
    background-color: #54595F;
    border-style: solid;
    border-width: 3px 0px 0px 0px;
    border-color: #7fc688;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 0px;
    margin-bottom: 0px
    @media (max-width: 1024px){
        padding: 10px 10px 10px 10px;
    }

`;

const Div = styled.div`
max-width: 120rem;
margin: 0 auto;
text-align: center;
@media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`;

const Ul = styled.ul`
margin-left: auto;
-webkit-box-pack: end;
justify-content: flex-end;
display: block;
list-style: none;
margin: 0;
padding: 0;
line-height: normal;
-webkit-tap-highlight-color: rgba(0,0,0,0);
position: relative;
    z-index: 2;
`;

const Li = styled.li`
border-style: solid;
border-color: #7fc688;
border-bottom-width: 1px;
border-width: 0;
position: relative;
display: block;
list-style: none;
margin: 0;
padding: 0;
line-height: normal;
-webkit-tap-highlight-color: rgba(0,0,0,0);
`;

const ListText = styled.li`
    color: #53a75c;
    padding-left: 3px;
    display: inline-block;
    font-family: "Montserrat", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 2.5em;
    width: 100%;
    @media (max-width: 767px){
    display: none;
}
    `;

const Toggle = styled.div`
color: #ffffff;
margin-left: auto;
    background-color: rgba(0,0,0,0);
    font-size: 30px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: .25em;
    cursor: pointer;
    border: 0 solid;
    border-radius: 3px;
`;

const Dropdown = styled.nav`
top: 45px;
width: 714px;
left: -499.797px;
@media (max-width: 1024px) {
    margin-top: 13px !important;
}
background-color: #53a75c;
border-style: solid;
border-width: 1px 1px 1px 1px;
border-color: rgba(127,198,136,0.69);

position: absolute;
z-index: 9997;
transition: max-height .3s,transform .3s,-webkit-transform .3s;
transform-origin: top;
overflow: auto;
font-size: 13px;
transform: scaleY(0);
max-height: 0;
.active {
    transform: scaleY(1);
    max-height: 100vh;
}
`;



const Header = () => {
    return ( 
    <>
        <Div>
            <ListText>
            <ImLocation />
            6621 W Broadway STE 600, McCordsville IN, 46055
            </ListText>
            <ListText>
            <HiMail />
            office@thedentistsatgc.com
            </ListText>
            <ListText>
            <FaPhone/>
            317-643-9434
            </ListText>
        </Div>
        <Nav>
            <Div>
                <Link to="/">
                    <img src="/logo.png" alt="Logo The Dentists" />
                </Link>
                <Navigation/>
                <Dropdown role="navigation">
                <GiHamburgerMenu className={globalStyles.icon}/>
                </Dropdown>
            </Div>
        </Nav>
        </>
     );
}
 
export default Header;