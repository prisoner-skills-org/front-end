import React from "react";
import styled from "styled-components";

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
width:200px;
height:25px;
background-color:#2185d0;
color:white;
position:relative;
right:-67px;
`;

const PrisonerCard = props => {
    return (
     
        <Box>
          
            <TitleAttys>Prisoner Name: {props.first_name} {props.last_name}</TitleAttys>
            <BoxAttys>Gender: {props.gender}</BoxAttys>           
   
        </Box>
     
    );
  };
  
  export default PrisonerCard;