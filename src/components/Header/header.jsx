export const Header = (props) => {
    return (
        <div className="summary__head">
            <img
            className="summary__photo"
            src={props.image}
            />
            <div className="summary__head-property">
            <h3 className="summary__name">{props.name}</h3>
            <div className="summary__adress">{props.adress}</div>
            <div className="summary__city">{props.city}</div>
            <div className="summary__rating">{props.rating}</div>
            </div>
            <div className="summary__head-room">
            <h3 className="summary__name">{props.roomname}</h3>
            <div className="summary__room-type">{props.roomtype}</div>
            <div className="summary__room-price">{props.roomprice} Kč / noc</div>
            </div>
        </div>
    )}