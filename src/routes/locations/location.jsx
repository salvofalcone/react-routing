import { useParams } from "react-router-dom";

import { roomList } from "../../mocks/reservations.js";

import style from "../../styles/routes/Location.module.scss";

export default function Location() {
  const params = useParams();

  const currentRoom = roomList.find((room) => room.id === parseInt(params.id));
  console.log(currentRoom);

  return (
    <div className={style.Card}>
      <div className={style.Card__Top}>
        <h3 className={style.Card__Title}>{currentRoom.name}</h3>
        <p className={style.Card__Location}>{currentRoom.location}</p>
      </div>
      <div className={style.Card__Images}>
        {/* aggiungere altre immagini + swiper */}
        <img
          className={style.Card__Img}
          src={currentRoom.imageLocation}
          alt={currentRoom.name}
        />
      </div>
    </div>
  );
}
