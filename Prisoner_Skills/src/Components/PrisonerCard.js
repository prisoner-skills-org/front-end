import React from "react";
import styled from "styled-components";
import FlexContainer from 'react-styled-flexbox';

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 27vw;
border-radius:3px;
-webkit-box-shadow:0 0 8px rgba(0,0,0,.40);
-moz-box-shadow:0 0 8px rgb(153,153,153);
-o-box-shadow:0 0 8px #999;
box-shadow:0 0 8px #999999;
`;

const TitleAttys = styled.div`
border-bottom:1px solid black;
font-family: 'Anton', sans-serif;
margin-bottom:5px;
padding:2px;
background-color:#2185d0;
color:white
display:flex;
align-items:center;
justify-content:center;
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:black;
margin-left:5px;
`;
const Button = styled.button`
border-radius:8px;
width:100px;
height:25px;
background-color:#2185d0;
color:white;
margin:4px;
`;

const PrisonerCard = props => {
    function enterHandler (event){
        event.target.style.backgroundColor = "#e0e1e2";
        event.target.style.color="black";
    }
    function leaveHandler (event){
        event.target.style.backgroundColor= "#2185d0";
        event.target.style.color="white";
    }
    return (
     
        <Box>
          
            <TitleAttys>Prisoner Name: {props.first_name} {props.last_name}</TitleAttys>
            <BoxAttys>Gender: {props.gender}</BoxAttys> 
            <BoxAttys>Cleared: {props.cleared}</BoxAttys>           

            <FlexContainer justifyCenter = {true}>
                <Button onMouseEnter={enterHandler}
                        onMouseLeave={leaveHandler}>Skill Set</Button>
            </FlexContainer>
        </Box>
     
    );
  };
  
  export default PrisonerCard;