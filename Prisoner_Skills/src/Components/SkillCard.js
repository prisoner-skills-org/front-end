import React from "react";
import styled from "styled-components";


const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:black;
margin-left:5px;
`;


const SkillCard = props => {
    return (
        
            <BoxAttys>{props.skill}</BoxAttys> 
        
    );
  }

  
  export default SkillCard;