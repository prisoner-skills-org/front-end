import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getPrisons, getPrisoners, updatePrisoner } from "../actions/prisonActions";

import { Link } from "react-router-dom";

import { 
    Button, 
    Form as SemanticForm, 
    Grid, 
    Header, 
    Segment 
  } from 'semantic-ui-react'

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const AdminDashboard = props => {
    const [modalVisi, setModalVisi] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(_ => {
        props.getPrisons(1);
    }, [])

    useEffect(_ => {
        if(props.prisonData)
            props.getPrisoners(props.prisonData.id);
    }, [props.prisonData])

    const handleModalOpen = data => {
        setModalData(data);
        setModalVisi(true);
    }

    const savePrisoner = prisoner => {
        props.updatePrisoner(prisoner);
        setModalVisi(false);
    }

    const _renderPrisonStuff = _ => {
        return 
    }

    return (
        <div style = {{ marginLeft: 10, minHeight: "100vh" }} >
            <h1>Admin Dashboard</h1>
            { !props.isLoadingPrisons && !props.prisonData && <h1>No prisons</h1> }
            { !props.isLoadingPrisons && <h1>Prison: {props.prisonData.name}</h1> }
            { props.isLoadingPrisons && <h1>Loading Prisons...</h1> }
            
            { !props.isLoadingPrisons && !props.isLoadingPrisoners && <h2>Prisoners: </h2> }
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                { !props.isLoadingPrisons && props.isLoadingPrisoners ? <h1>Loading Prisoners...</h1> : props.prisoners.map(e => <PrisonerCard key={e.id} {...e} onClick = {_ => handleModalOpen(e)} />) }
            </div>
            <Modal
                isOpen={modalVisi}
                onRequestClose={_ => setModalVisi(false)}
                style={customStyles}
                contentLabel="Edit Prisoner"
            >
                <PrisonerEditView data = {modalData} savePrisoner = {savePrisoner} />
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state.prison
    }
}

export default connect(mapStateToProps, { getPrisons, getPrisoners, updatePrisoner })(AdminDashboard);

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
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.4s, transform 0.4s;

    &:hover {
        background-color: #e6e6e6;
        transform: scale(1.05, 1.05);
    }
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
const BoxAttys = styled.div`
    font-family: 'Anton', sans-serif;
    color:grey;
`;

const PrisonerCard = props => {
    return (
        <Box onClick = {props.onClick}>
            <TitleAttys>{props.first_name} {props.last_name}</TitleAttys>
            <BoxAttys>{props.gender}</BoxAttys>
        </Box>
    );
};

const PrisonerEditView = props => {
    const [editMode, setEditMode] = useState(false);
    const [fields, setFields] = useState(props.data);

    const handleChange = e => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    }

    const handleSubmit = _ => {
        props.savePrisoner(fields);
    }

    return (
        <>
            <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 15 }}>
                <h3 style = {{ margin: 0, marginRight: 15 }}>{fields.first_name}'s info</h3>
                { !editMode && <button onClick = {_ => setEditMode(true)}>Edit</button> }
            </div>
            <div style = {{ display: editMode ? "flex" : "none", flexDirection: "column", marginBottom: 15 }}>
                <label style = {{ display: "flex", flexDirection: "column", margin: "5px 0" }}> Name : <input type = "text" value = {fields.first_name} name = "first_name" onChange = {handleChange} /></label>
                <label style = {{ display: "flex", flexDirection: "column", margin: "5px 0" }}>Gender: <input type = "text" value = {fields.gender} name = "gender" onChange = {handleChange} /></label>
            </div>
            <div style = {{ display: !editMode ? "flex" : "none", flexDirection: "column" }}>
                <label> Name : {fields.first_name}</label>
                <label>Gender: {fields.gender}</label>
            </div>
            { editMode && <button onClick = {_ => setEditMode(false)}>Cancel</button> }
            { editMode && <button onClick = {handleSubmit}>Save</button> }
        </>
    );
}