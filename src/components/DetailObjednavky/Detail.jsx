export const Detail = (props) => {
    const jidlo = props.food ? 'penzion' : 'žádné'

    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">Ćíslo: 459787-745</div>
            <div className="summary__dates">Pobyt: 13.6.2023 - 17.6.2026</div>
            <div className="summary__guests">Hosté: 2 dospělí, 1 dítě</div>
            <div className="summary__services">Stravovávní: {jidlo}</div>
            <div className="summary__room-total">7 200 Kč</div>
            <div className="summary__check-in">Check-in: {props.checkin} do 18:00</div>
            <div className="summary__check-out">
            Check-out: {props.checkout} do 10:00
            </div>
        </div>
    )
}