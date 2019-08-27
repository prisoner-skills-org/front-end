import React, { useEffect, useState } from 'react'
import axios from "axios";
import FlexContainer from 'react-styled-flexbox';
import SkillCard from './SkillCard';
import SkillData from './SkillData';

function SkillList() {
    const [skill, setSkill] = useState(SkillData);
    // useEffect(() => {
    //   axios
    //     .get("", {
    //       params: {}
    //     })
    //     .then(response => {
    //       const skill = response.data;
    //       console.log("Skills:", skill);
    //       setSkill(skill);
    //     });
    // }, []);
  
    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
  {skill.map(skill => {
            return (
              
              <SkillCard
                key = {skill.id}
                skill1= {skill.skill1}
                skill2= {skill.skill2}
                skill3= {skill.skill3}
                skill4= {skill.skill4}
                
              />
            );
          })}
          
      </FlexContainer>
  )
  }
export default SkillList