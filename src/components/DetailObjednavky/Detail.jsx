export const Detail = (props) => {
    const jidlo = props.food ? 'penzion' : 'žádné'

    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">Ćíslo: {props.cislo}</div>
            <div className="summary__dates">Pobyt: {props.pobyt}</div>
            <div className="summary__guests">Hosté: {props.dospeli} dospělí, {props.deti} dítě</div>
            <div className="summary__services">Stravovávní: {jidlo}</div>
            <div className="summary__room-total">{props.total} Kč</div>
            <div className="summary__check-in">Check-in: {props.checkin} do 18:00</div>
            <div className="summary__check-out">
            Check-out: {props.checkout} do 10:00
            </div>
        </div>
    )
}