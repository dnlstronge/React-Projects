

export default function Title({titleprop, newprop}) {
    return (
        <>
            <h1 className="title">{titleprop} <br /> {newprop}</h1>
            <br />
            <h2 className="subtitle">Latest Events</h2>
        </> 
    )
}