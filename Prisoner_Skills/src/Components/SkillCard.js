import React from "react";
import styled from "styled-components";

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 25%;
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

const SkillCard = props => {
    return (
     
        <Box>
          
            <TitleAttys>Skills:</TitleAttys>
            <BoxAttys>{props.skill1}</BoxAttys>
            <BoxAttys>{props.skill2}</BoxAttys>
            <BoxAttys>{props.skill3}</BoxAttys>
            <BoxAttys>{props.skill4}</BoxAttys>
 
        </Box>
     
    );
  };
  
  export default SkillCard;