import React from "react";
import styled from "styled-components";

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 33%;
transition: box-shadow .3s;
`;

const TitleAttys = styled.div`
border-bottom:1px solid black;
font-family: 'Anton', sans-serif;
margin-bottom:5px;
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:grey;
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