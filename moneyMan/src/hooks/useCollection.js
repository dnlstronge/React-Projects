import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useCollection = (collection) => {
    const [ documents, setDocuments ] = useState(null)
    const [ error, setError ] = useState(null)


    // below: when using snap shot two args, 1st sets state for docs and error
    // the second handles error

    useEffect(() => {
        let ref = projectFirestore.collection(collection)
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


    }, [collection])

    return {documents, error}
}