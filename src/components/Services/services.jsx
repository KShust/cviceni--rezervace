export const Services = (props) => {
    const wellness = props.welness ? 'Zdarma' : '500 Kč'

    return (
        <div className="summary__services">
            <h3>Doplňkové služby</h3>
            <div className="summary__service">Parkování: {props.parking} Kč / noc</div>
            <div className="summary__service">Snídaně: 150 Kč / noc</div>
            <div className="summary__service">Wellness: {wellness}</div>
            <div className="summary__service">Wifi: {props.wifi}</div>
        </div>
    )
}