import React, { useEffect } from 'react'
import FlexContainer from 'react-styled-flexbox';
import PrisonerCard from './PrisonerCard';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPrisoners } from "../actions/prisonActions";

function PrisonerList(props) {
    useEffect(() => {
      props.getPrisoners(props.match.params.id)
    }, []);
  
    return (
      <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
  {props.prisoners.length===0 &&props.isLoadingPrisoners&&<h1>Loading...</h1>}
  {props.prisoners.map(prisoner => {
            return (
            <Link to={`prisoner/${prisoner.id}`} key={prisoner.id}>
              <PrisonerCard
                key = {prisoner.id}
                first_name= {prisoner.first_name}
                last_name= {prisoner.last_name}
                gender = {prisoner.gender}
                cleared = {prisoner.cleared}
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
export default connect(mapStateToProps, {getPrisoners})(PrisonerList)