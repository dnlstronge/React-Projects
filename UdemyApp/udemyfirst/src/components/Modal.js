import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal( (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "solid", 
        borderColor: isSalesModal ? "black" : "white",
        textAlign: 'center'}}>

        {children}

        <button 
        className ={isSalesModal ? 'trueClass' : ''} 
        onClick={handleClose}>Close</button>
      </div>
    </div>

  ), document.body )
};

// exploring use of portals, import reactDOM
// takes to arguments: what and where......