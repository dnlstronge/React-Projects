//add new docs to firestore collection
//remove docs from firestore collection

import { useReducer, useEffect, useState,  } from "react";
import { projectFirestore } from '../firebase/config'

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null

}

const firestoreReducer = (state, action) => {
    switch (action.type) {

        //add cases to update state
        case 'IS_PENDING': 
        return { ...state, isPending: true }

        default: 
        return state
    }

}

export const useFirestore = (collection) => {

    const [ response, dispatch ] = useReducer(firestoreReducer, initialState ) // response = state
    const [ isCancelled, setIsCancelled ] = useState(false) // for cleanup function on unmount

    //ref: collection - to be used for both adding and deleting

    const ref = projectFirestore.collection(collection)

    // to dispatch if isCancelled is false: 

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled) { dispatch(action)}
    }

    // add doc:
    const addDocument = async (doc) => {
        dispatch({type: 'IS_PENDING'}) // no data = no payload req
        try {
            const addedDocument = await ref.add(doc)
            dispatchIfNotCancelled
        }
        catch (err) {

        }
    }

    // delete doc:

    const deleteDocument = async (id) => {

    }

    // cleanup function

    useEffect(()=> { 
        return () => {
        setIsCancelled(true)
    }

    }, []) // only runs on mount due to empty dep array

    return { addDocument, deleteDocument, response }
}