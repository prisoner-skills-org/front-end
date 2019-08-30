import React, { useEffect } from 'react'
// import axios from "axios";
import FlexContainer from 'react-styled-flexbox';
import { Link } from "react-router-dom";
import PrisonCard from './PrisonCard';
import { connect } from "react-redux";
import { getAllPrisons } from "../actions/prisonActions";

function PrisonList(props) {
    // const [prison, setPrison] = useState([]);
    useEffect(() => {
        props.getAllPrisons()
    }, []);
  
    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
  {props.prisons.length===0 && props.isLoadingPrisons&&<h1>Loading...</h1>}
  {props.prisons.map(prison => {
            return (
              <Link to={`prison/${prison.id}`} key={prison.id}>
                <PrisonCard
                  key = {prison.id}
                  name= {prison.name}
                  address = {prison.address}
                />
              </Link>
            );
          })}
          
      </FlexContainer>
  )
  }
  const mapStateToProps = state => {
    return {
        ...state.prison
    }
}
export default connect(mapStateToProps, {getAllPrisons}) (PrisonList)