
import { projectFirestore } from '../../firebase/config.js'

//Components
import RecipeList from '../../components/RecipeList.js'

//hooks
import { useEffect, useState } from 'react'

//styles
import './Home.css'


export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

  useEffect( () => {
    setIsPending(true)
// want not only to get but to watch data in RT: realtime listener 
// delete catch block as errors will be dealt with differently in RT
// also no get or then methods: replace with onSnapshot

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if(snapshot.empty) {
        setError('No recipes to load...')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })
// need to clean up though:
    return () => unsub()
// if user goes to another page it unsubs from the RT listener
  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
      
    </div>
  )
}
