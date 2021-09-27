import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [
        burgerStatus,
        setBurgerStatus
    ] = useState(false);

    return (
        <Container>
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="150" viewBox="-41.8008 -9.08425 362.2736 54.5055"><path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07"/></svg>
            </a>
            <Menu>

                <a href="">
                    Model S
                </a>
                <a href="">
                    Model 3
                </a>
                <a href="">
                    Model X
                </a>
                <a href="">
                    Model Y
                </a>

            </Menu>

            <RightMenu>
                <a href="#">
                    Shop
                </a>
                <a href="#">
                    Tesla Account
                </a>
                <CustomMenu onClick={() => setBurgerStatus(true)}>
                    Menu
                </CustomMenu>
             
            </RightMenu>
           

            <BurgerNav show={burgerStatus}>
                <CloseWrapper onClick={() => setBurgerStatus(false)}>
                    <CloseIcon/>
                </CloseWrapper>
                <li><a href="">Exsiting Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade In</a></li>
                <li><a href="">Cyber Truck</a></li>
                <li><a href="">Roadaster</a></li>
                <li><a href="">Semi</a></li>
                <li><a href="">Charging</a></li>
                <li><a href="">Powerwall</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Investors Relations</a></li>
                <li><a href="">United States <br/> <small>English</small></a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
display:flex;
justify-content:space-between;
align-items:center;
    padding: 10px 40px 10px 20px;
position:fixed;
width:100%;
z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex: 1;
a{
    font-weight:400;
    padding: 0 10px;
    font-size:16px;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:400;
    padding: 0 10px;
    font-size:16px;
}


`

const CloseWrapper = styled.div`
cursor:pointer;
display: flex;
justify-content: flex-end;
`
const CustomMenu = styled.div`
cursor:pointer;
margin-left:10px;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index-16;
list-style:none;
padding: 30px 36px;
display:flex;
flex-direction:column;
text-align: start;
transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
transition: transform 0.2s;

li{
    padding: 15px 0;
    font-size:14px;
}
`


