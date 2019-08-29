import React, { useEffect, useState } from 'react'
import axios from "axios";
import FlexContainer from 'react-styled-flexbox';
import styled from "styled-components";

import SkillCard from './SkillCard';

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

function SkillList(props) {
    const [skill, setSkill] = useState([]);
    const id = props.match.params.id;
    useEffect(() => {
      axios
        .get(`https://prisoners-bw.herokuapp.com/api/prisoners/${id}/skills`, {
          params: {}
        })
        .then(response => {
          const skill = response.data.skills;
          console.log("Skills:", skill);
          setSkill(skill);
        });
    }, []);
  
    return (
      
      <FlexContainer  itemsCenter = {true} justifyContent = {true} directionColumn = {true}>
        <Box>
        <TitleAttys>Skill Set:</TitleAttys>
  {skill.map(item => {
            return (
              
              <SkillCard
                key = {item.id}
                skill= {item.name}
              />
            );
          })}
          </Box>
          <h5>Please reach out to the warden if you have interest in hiring this person.</h5>
      </FlexContainer>
  )
  }
export default SkillList