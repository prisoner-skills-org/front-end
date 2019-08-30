import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getPrisons, addPrison, getPrisoners, updatePrisoner, getAccountDetails } from "../actions/prisonActions";

import { Link } from "react-router-dom";

import { 
    Button, 
    Form as SemanticForm, 
    Grid, 
    Header, 
    Segment 
  } from 'semantic-ui-react'

import Modal from 'react-modal';
import axiosWithAuth from "../axiosWithAuth";

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
        if(!props.account || !props.account.id)
            props.getAccountDetails();
    }, [])

    useEffect(_ => {
        if(!props.prisonData && props.account && props.account.id) {
            props.getPrisons(props.account.id);
        }
    }, [props.account])

    useEffect(_ => {
        if(props.prisoners.length === 0 && props.prisonData) {
            props.getPrisoners(props.prisonData.id);
        }
    }, [props.prisonData])

    const handleModalOpen = data => {
        setModalData(data);
        setModalVisi(true);
    }

    const savePrisoner = (prisoner, addSkills, deleteSkills) => {
        props.updatePrisoner(prisoner, addSkills, deleteSkills);
        setModalVisi(false);
    }

    const addPrisonIntercept = prison => {
        prison.user_id = props.account.id;
        delete prison.admin_id;
        props.addPrison(prison);
    }

    const _renderPrisonStuff = _ => {
        if(!props.isLoadingPrisons && !props.prisonData && !props.isLoadingAccount) {
            return <CreatePrisonForm addPrison = {addPrisonIntercept} />
        }
        else if(!props.isLoadingAccount)
            return (
                <>
                    { !props.isLoadingPrisons && <h1>Prison: {props.prisonData.name}</h1> }
                    { props.isLoadingPrisons && <h1>Loading Prisons...</h1> }
                    
                    { !props.isLoadingPrisons && !props.isLoadingPrisoners && <h2>Prisoners: </h2> }
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        { !props.isLoadingPrisons && (props.isLoadingPrisoners ? <h1>Loading Prisoners...</h1> : props.prisoners.map(e => <PrisonerCard key={e.id} {...e} onClick = {_ => handleModalOpen(e)} />)) }
                    </div>
                </>
            )
    }

    return (
        <div style = {{ marginLeft: 10 }} >
            <h1>Admin Dashboard</h1>
            { props.isLoadingAccount && <h1>Loading Account...</h1> }
            { _renderPrisonStuff() }
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

export default connect(mapStateToProps, { getAccountDetails, getPrisons, addPrison, getPrisoners, updatePrisoner })(AdminDashboard);

const Input = styled.input`
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    tap-highlight-color: rgba(255,255,255,0);
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    font-size: 1em;
    background:
    #fff;
        background-image: none;
    border: 1px solid
    rgba(34,36,38,.15);
    color:
    rgba(0,0,0,.87);
    border-radius: .28571429rem;
    box-shadow: 0 0 0 0
    transparent inset;
    transition: color .1s ease,border-color .1s ease;
`;

class CreatePrisonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            admin_id: -1
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addPrison(this.state);
        setTimeout(_ => window.location.reload(), 2500);
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} style = {{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "30%", margin: "0 auto" }}>
                <label style = {{ display: "flex", flexDirection: "column", width: "100%" }}>Prison Name: 
                    <Input name = "name" type = "text" value = {this.state.name} onChange = {this.handleChange} />
                </label>
                <label style = {{ display: "flex", flexDirection: "column", margin: "20px 0", width: "100%" }}>Prison Address: 
                    <Input name = "address" type = "text" value = {this.state.address} onChange = {this.handleChange} />
                </label>

                <button type = "submit" style = {{ backgroundColor: "rgb(33, 133, 208)", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, width: "100%", cursor: "pointer" }}>Create Prison</button>
            </form>
        );
    }
}

const Box = styled.div`
    border:1px solid black;
    margin-top:20px;
    background-color:whitesmoke;
    padding:3px;
    border-radius:3px;
    width: 27vw;
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
            <TitleAttys>{props.name}</TitleAttys>
            <BoxAttys>{props.gender}</BoxAttys>
        </Box>
    );
};

const PrisonerEditView = props => {
    let temp = { ...props.data };
    temp["canHaveWorkLeave"] = props.data.canHaveWorkLeave === 1;
    const [editMode, setEditMode] = useState(false);
    const [fields, setFields] = useState(temp);
    const [skillInput, setSkillInput] = useState("");
    const [oldSkills, setOldSkills] = useState(fields.skills || []);
    const [skills, setSkills] = useState(fields.skills || []);

    useEffect(_ => {
        axiosWithAuth().get("https://prisoners-bw.herokuapp.com/api/skills/")
            .then(res => {
                let skills = res.data.filter(e => e.prisoner_id === fields.id);
                setSkills(skills);
                setOldSkills(res.data.filter(e => e.prisoner_id === fields.id));
            })
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    }

    const handleSubmit = _ => {
        let addSkills = skills.filter(e => !e.id);
        let deleteSkills = oldSkills.filter(e => !skills.find(e2 => e2.id && e.id === e2.id));

        let temp = { ...fields };
        temp["canHaveWorkLeave"] = fields["canHaveWorkLeave"] ? 1 : 0; 

        props.savePrisoner(temp, addSkills, deleteSkills);
    }

    const handleSkillChange = e => {
        setSkillInput(e.target.value);
    }

    const handleSkillAdd = _ => {
        setSkills([ ...skills, { name: skillInput, prisoner_id: fields.id } ]);
        setSkillInput("");
    }

    const handleSkillDelete = skillValue => {
        setSkills([ ...skills.filter(e => e.name !== skillValue) ]);
    }

    const handleDelete = _ => {
        axiosWithAuth().delete("https://prisoners-bw.herokuapp.com/api/auth/prisoners/" + fields.id)
            .then(res => {
                window.location.reload();
            })
    }

    return (
        <>
            <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 15 }}>
                <h3 style = {{ margin: 0, marginRight: 15, flexGrow: 1 }}>{fields.name}'s info</h3>
                { !editMode && <button onClick = {_ => setEditMode(true)} style = {{ backgroundColor: "rgb(33, 133, 208)", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, width: "50%", cursor: "pointer" }}>Edit</button> }
                { !editMode && <button onClick = {handleDelete} style = {{ backgroundColor: "red", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, width: "50%", cursor: "pointer" }}>Delete</button> }
            </div>
            <div style = {{ display: editMode ? "flex" : "none", flexDirection: "column", marginBottom: 10 }}>
                <label style = {{ display: "flex", flexDirection: "column", margin: "5px 0" }}> Name : <Input type = "text" value = {fields.name} name = "name" onChange = {handleChange} /></label>
                <label style = {{ display: "flex", flexDirection: "column", margin: "5px 0" }}>Gender: <Input type = "text" value = {fields.gender} name = "gender" onChange = {handleChange} /></label>
                <label style = {{ margin: "5px 0", display: "flex", alignItems: "center", margin: "20px 0" }}>Can have work leave: <input type = "checkbox" checked = {fields.canHaveWorkLeave} name = "canHaveWorkLeave" onChange = {e => {
                    setFields({ ...fields, canHaveWorkLeave: e.target.checked })
                }} style = {{ marginLeft: 5 }} /></label>
                <label style = {{  }}>Skill: <Input type = "text" value = {skillInput} onChange = {handleSkillChange} /><button onClick = {handleSkillAdd} style = {{ height: "37px", float: "right", backgroundColor: "rgb(33, 133, 208)", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, cursor: "pointer" }}>Add Skill</button></label>
                <ul style = {{ display: "flex", flexDirection: "column" }}>
                    { skills.map(e => <li key = {e.id} style = {{ margin: "5px 0" }}><span>{e.name}</span><button onClick = {_ => handleSkillDelete(e.name)} style = {{ float: "right", backgroundColor: "red", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, width: "50%", cursor: "pointer" }}>Delete</button></li>) }
                </ul>
            </div>
            <div style = {{ display: !editMode ? "flex" : "none", flexDirection: "column" }}>
                <label> Name : {fields.name}</label>
                <label>Gender: {fields.gender}</label>
                <ul>
                    { skills.map(e => <li key = {e.id}>{e.name}</li>) }
                </ul>
            </div>

            { editMode && <button onClick = {_ => setEditMode(false)} style = {{ height: "37px", backgroundColor: "rgb(33, 133, 208)", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, cursor: "pointer", marginRight: 5 }}>Cancel</button> }
            { editMode && <button onClick = {handleSubmit} style = {{ height: "37px", backgroundColor: "rgb(33, 133, 208)", color: "white", padding: "5px 10px", border: 0, borderRadius: 5, cursor: "pointer" }}>Save</button> }
        </>
    );
}