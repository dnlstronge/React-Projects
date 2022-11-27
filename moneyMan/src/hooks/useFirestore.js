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

        default: 
        return state
    }

}

export const useFirestore = (collection) => {

    const [ response, dispatch ] = useReducer(firestoreReducer, initialState ) // response = state
    const [ isCancelled, setIsCancelled ] = useState(false) // for cleanup function on unmount

    //ref: collection - to be used for both adding and deleting
    
    const ref = projectFirestore.collection(collection)
}