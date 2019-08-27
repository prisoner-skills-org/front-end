import React, { useEffect } from 'react'

// connects us to the redux store with a component
// it basically passes down all of the info through props
import { connect } from "react-redux";

// You must import actions that you want to perform to the redux store
// It is important to note that actions DO NOT return anything, instead, our state will update
import { getPrisoners } from "./actions/prisonActions";

const App = props => {
    useEffect(() => {
        // Because we used connect()() and passed in the action getPrisoners it gets passed to us in props
        // getPrisoner takes a parameter for prisonName as a String, so this will get all the prisoners for the prison "Hello"
        props.getPrisoners("Hello");
    }, [])

    return(
        <div className='App'>
            <h1>{props.isLoading ? "Loading..." : "Hey"}</h1>
        </div>
    )
}

// This takes our redux store's state and passes it to our props based on whatever we put in the return object
const mapStateToProps = state => {
    return {
        isLoading: state.prison.isLoading
    };
}

// This ties together everything, state, actions, and passes everything to the props on our Component
// connect(stateObject, actionsObject)(Component)
export default connect(mapStateToProps, { getPrisoners })(App);


// If you want to watch for changes you can useEffect and pass in the redux state you want to watch for
// Example:
/*
    useEffect(() => {
        // this will fire whenever isLoading changes
    }, [props.prison.isLoading])

    useEffect(() => {
        // This will fire whenever prisoners changes
        // NOTE: Make sure to add prisoners to our mapStateToProps currently we are only using isLoading from the redux store
    }, [props.prison.prisoners])
*/ 