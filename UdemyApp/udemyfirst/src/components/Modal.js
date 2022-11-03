
import './Modal.css'
export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>

  )
}
// you can access the chidren of Modal in app.js
// via props, see above


//children essentialy says find me the children inside this

//use destructuring!