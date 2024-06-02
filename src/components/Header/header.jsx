export const Header = (props) => {
    return (
        <div className="summary__head">
            <img
            className="summary__photo"
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
            />
            <div className="summary__head-property">
            <h3 className="summary__name">{props.name}</h3>
            <div className="summary__adress">{props.adress}</div>
            <div className="summary__city">{props.city}</div>
            <div className="summary__rating">{props.rating}</div>
            </div>
            <div className="summary__head-room">
            <h3 className="summary__name">{props.roomname}</h3>
            <div className="summary__room-type">
                Dvoulůžkový s dětskou přistýlkou
            </div>
            <div className="summary__room-price">1 800 Kč / noc</div>
            </div>
        </div>
    )}