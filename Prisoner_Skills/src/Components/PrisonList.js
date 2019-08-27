import React, { useEffect, useState } from 'react'
import axios from "axios";
import FlexContainer from 'react-styled-flexbox';
import { Link } from "react-router-dom";
import PrisonCard from './PrisonCard';

function PrisonList() {
    const [prison, setPrison] = useState([]);
    useEffect(() => {
      axios
        .get("https://my.api.mockaroo.com/prisons?key=0050fa30", {
          params: {}
        })
        .then(response => {
          const prison = response.data;
          console.log("Prison:", prison);
          setPrison(prison);
        });
    }, []);
  
    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
  {prison.map(prison => {
            return (
              <Link to={`prison/${prison.id}`} key={prison.id}>
                <PrisonCard
                  key = {prison.id}
                  Name= {prison.Name}
                  Workers = {prison.Workers}
                  Total = {prison.Total}
                  location = {prison.location}
                />
              </Link>
            );
          })}
          
      </FlexContainer>
  )
  }
export default PrisonList