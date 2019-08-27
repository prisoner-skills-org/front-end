import React, { useEffect, useState } from 'react'
import axios from "axios";
import FlexContainer from 'react-styled-flexbox';
import PrisonerCard from './PrisonerCard';

function PrisonerList() {
    const [prisoner, setPrisoner] = useState([]);
    useEffect(() => {
      axios
        .get("https://my.api.mockaroo.com/prisoners.json?key=8c104da0", {
          params: {}
        })
        .then(response => {
          const prisoner = response.data;
          console.log("Prisoner:", prisoner);
          setPrisoner(prisoner);
        });
    }, []);
  
    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
  {prisoner.map(prisoner => {
            return (
              <PrisonerCard
                key = {prisoner.id}
                first_name= {prisoner.first_name}
                last_name= {prisoner.last_name}
                gender = {prisoner.gender}
                cleared = {prisoner.cleared}
              />
            );
          })}
          
      </FlexContainer>
  )
  }
export default PrisonerList