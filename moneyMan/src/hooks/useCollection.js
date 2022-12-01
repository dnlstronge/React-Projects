import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useCollection = (collection, _query) => {
    const [ documents, setDocuments ] = useState(null)
    const [ error, setError ] = useState(null)

// fixes issue cause by using an array inside dep array (inf loop)

    const query = useRef(_query).current


    useEffect(() => {
        let ref = projectFirestore.collection(collection)
// add where

        if (query) {
            ref = ref.where(...query)
        }

        const unsubscribe = ref.onSnapshot( (snapshot) => {
            let results = []
            snapshot.docs.forEach( doc => {
                results.push({...doc.data(), id: doc.id })
            })

            // updates state
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Could not fetch data')
        })
            // cleanup/unsub
        
            return () => unsubscribe()


    }, [collection, query])

    return {documents, error}
}

// Houston we have Problem: would this not cause infinite cycle of rerender
// due to an array reference type? i.e JS will see query as different and because
// there is a diff to something in the dep array useEffect would fire again and again......
// useRef to get arround this? rename query and wrap using useref, store that in var called query