
import locationPic from "../images/location1.png"
export default function Travels(props) {


    return (
        <div className="travel">
            <img src={props.data.image} alt={props.data.image} />
            
            <div className="travel--details">
            <p>
            <img src={locationPic} width="20" height="15" alt={locationPic} />
                {props.data.country} 
                <span className="travel--maps" >
                <u><a href={props.data.map} target="_blank"> View on Google Maps </a></u>
                </span>
            </p>
            <h1>{props.data.place}</h1>
            <h3>{props.data.date}</h3>
            <p>{props.data.description}</p>
            </div>
        </div>
    )
}