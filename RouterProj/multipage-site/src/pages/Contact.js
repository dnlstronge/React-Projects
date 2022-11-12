import {useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search // gets ?, =, key and value
  console.log(queryString)
  
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")


  return (
    <div>
      <h2> Hey {name}, contact us at:
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Aliquid placeat veritatis commodi quam maiores eaque, 
    voluptas autem doloremque est explicabo illum dolor 
    laborum unde quasi in, architecto odit atque consectetur.
       </p>
      </h2>
    </div>
  )
}
