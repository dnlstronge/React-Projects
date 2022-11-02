
//add in the props from app.js(Title), note I have used
//destructuring here {}, avoids the need for props.'x'

export default function Title({titleprop, newprop}) {
    return (
        <div>
            <h1 className="title">{titleprop} <br /> {newprop}</h1>
            <br />
            <h2 className="subtitle">Latest Events</h2>
        </div> 
    )
}