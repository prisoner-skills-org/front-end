import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getPrisoners } from "../actions/prisonActions";

import { Link } from "react-router-dom";

const AdminDashboard = props => {
    console.log(props);
    useEffect(_ => {
        props.getPrisoners("")
    }, [])

    return (
        <div style = {{ marginLeft: 10, minHeight: "100vh" }} >
            <h1>Admin Dashboard</h1>
            <h2>Prisoners: </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {props.prisoners.map(e => <PrisonerCard key={e.id} {...e} />)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.prison
    }
}

export default connect(mapStateToProps, { getPrisoners })(AdminDashboard);

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 20%;
transition: box-shadow .3s;
margin: 10px;
border-radius: 5px;
`;

const TitleAttys = styled.div`
border-bottom:1px dashed grey;
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
            <TitleAttys>{props.first_name} {props.last_name}<Link to = "/" style = {{ float: "right" }}>Edit</Link></TitleAttys>
            <BoxAttys>{props.gender}</BoxAttys>

        </Box>
    );
};