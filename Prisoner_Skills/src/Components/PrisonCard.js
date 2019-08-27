import React from "react";
import styled from "styled-components";

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 27%;
border-radius:3px;
// -moz-box-shadow:    3px 3px 5px 6px #ccc;
//   -webkit-box-shadow: 3px 3px 5px 6px #ccc;
//   box-shadow:         3px 3px 5px 6px #ccc;
  -webkit-box-shadow:0 0 8px rgba(0,0,0,.40);

-moz-box-shadow:0 0 8px rgb(153,153,153);

-o-box-shadow:0 0 8px #999;

box-shadow:0 0 8px #999999;
`;

const TitleAttys = styled.div`
border-bottom:1px solid black;
font-family: 'Anton', sans-serif;
margin-bottom:5px;
background-color:#007bff;
color:white
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:grey;
`;

const PrisonCard = props => {
    return (
        <Box>
          
            <TitleAttys>Prison Name: {props.Name}</TitleAttys>
            <BoxAttys>Workers: {props.Workers}</BoxAttys>
            <BoxAttys>Total: {props.Total}</BoxAttys>
            <BoxAttys>Location: {props.location}</BoxAttys>
          
        </Box>
    );
  };
  
  export default PrisonCard;