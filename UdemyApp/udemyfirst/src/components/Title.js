export default function Title(props) {
    return (
        <div>
            <h1 className="title">{props.titleprop} <br /> {props.newprop}</h1>
            <br />
            <h2 className="subtitle">Latest Events</h2>
        </div> 
    )
}