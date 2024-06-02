import "../BookingSummary/BookingSummary.css"
import { Header } from "../Header/Header";
import { Detail } from "../DetailObjednavky/Detail"
import { Services } from "../Services/Services";
import { Cancel } from "../Cancel/Cancel";

const bookingData = {
  hotel: {
    name: "Hotel Lefsní Zátiší",
    address: "Malohradské skály 347/21",
    city: "Malohradská ves",
    rating: 4.65,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960",
    room: {
      name: "Pokoj 2",
      type: "Dvoulůžkový s dětskou přistýlkou",
      price: 1800,
    },
  },
  booking: {
    number: "459787-745",
    dates: {
      checkIn: "13.6.2023",
      checkOut: "17.6.2026",
      stay: "13.6.2023 - 17.6.2026",
    },
    guests: {
      adults: 2,
      children: 1,
    },
    services: {
      breakfast: 150,
      food: false,
      parking: 200,
      wifi: 'Zdarma na všech pokojích',
      wellness: true,
    },
    total: 7200,
  },
};


export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <Header name={bookingData.hotel.name} adress={bookingData.hotel.address} 
                city={bookingData.hotel.city} rating={bookingData.hotel.rating} roomname={bookingData.hotel.room.name}
                roomtype={bookingData.hotel.room.type} roomprice={bookingData.hotel.room.price}
                image={bookingData.hotel.image} />
        <Detail food={bookingData.booking.services.food} checkin={bookingData.booking.dates.checkIn}
                checkout={bookingData.booking.dates.checkOut} cislo={bookingData.booking.number} 
                pobyt={bookingData.booking.dates.stay} dospeli={bookingData.booking.guests.adults}
                deti={bookingData.booking.guests.children} total={bookingData.booking.total}/>
        <Services parking={bookingData.booking.services.parking} snidane={bookingData.booking.services.breakfast}
                wifi={bookingData.booking.services.wifi} wellness={bookingData.booking.services.wellness}/>
        <Cancel />
      </div>
    );
  };