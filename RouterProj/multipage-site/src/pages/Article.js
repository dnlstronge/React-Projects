import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


export default function Articles() {

const {id} = useParams()
const url = "http://localhost:3000/articles/" + id
const {data: article, isPending, error} = useFetch(url)
const history = useHistory() //returns an obj which can be used - has different methods on it which are useful

useEffect(() => {
  if(error) {
    //redirect user - could use .goBack but for this .push is better
    // this will happen isntantly so perhaps a delay so the error message can be read
   setTimeout(() => {
    history.push("/") //after 2 secs pushes a different route.
  }, 2000)
  }
}, [, history]) //outsidefunction must be declared as a dependency

  return (
    <div>
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {article && (<div>
      <h2>{article.title}</h2>
      <p> By {article.author}</p>
      <p>{article.body}</p>

    </div>
    )}
    </div> 
  )
}
