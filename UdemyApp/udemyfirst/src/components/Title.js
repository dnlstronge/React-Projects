import './Title.css'

export default function Title({titleprop, newprop}) {
    return (
        <div className="title-block">
            <h1 className="title">{titleprop} <br /> {newprop}</h1>
            <br />
            <h2 className="subtitle">Latest Events</h2>
        </div> 
    )
}