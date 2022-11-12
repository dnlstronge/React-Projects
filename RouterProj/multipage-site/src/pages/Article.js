
import { useParams } from "react-router-dom"

// need to extract route parameter in order to get data for each article

export default function Articles() {
const {id} = useParams()


/*

above: 
params-----> object from useParams
params.id-----> accesses the id parameter because in route I called it ':id'
variable(ref to UseParams obj).id(:couldbecalledanything)

params.id CAN BE DESTRUCTURED so const params becomes const {id}!

*/
  return (
    <div>Article Page - {id}</div> // destructured
  )
}
