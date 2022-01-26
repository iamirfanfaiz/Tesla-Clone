import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section( {title, des, backgroundImg, leftBtnText, rightBtnText} ) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{des}</p>
            </ItemText>
            </Fade>
           <Buttons>
           <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rightBtnText && 
                    <RightButton>
                    {rightBtnText}
                    </RightButton>
                }
               
            </ButtonGroup>
            </Fade>
            <DownArrow src="./images/down-arrow.svg"></DownArrow>
           </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:url('/images/model-s.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
justify-content:space-between;
flex-direction:column;
background-image: ${props => `url("./images/${props.bgImage}")`};

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
flex:1;
`

const ButtonGroup = styled.div`
display:flex;
justify-content:center;


`

const LeftButton = styled.div`
background-color: black;
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius: 100px;
opacity:0.86;
text-transform: Uppercase;
fontsize:12px;
margin: 15px;
`

const RightButton = styled(LeftButton)`
background:white;
color:#000;
opacity:0.65;
`

const DownArrow = styled.img`
margin-top:20px;
height: 40px;
animation: animationDown infinite 1.5s;
overflow:hidden;
`

const Buttons = styled.div`

`
