import { useParams } from "react-router-dom";

import { roomList } from "../../mocks/reservations.js";

import styles from "../../styles/routes/Location.module.scss";

export default function Location() {
  const params = useParams();

  const currentRoom = roomList.find((room) => room.id === parseInt(params.id));
  // console.log(currentRoom);

  return (
    <div className={styles.Card}>
      <div className={styles.Card__Top}>
        <h2 className={styles.Card__Title}>{currentRoom.name}</h2>
        <p className={styles.Card__Location}>{currentRoom.location}</p>
      </div>
      <div className={styles.Card__Images}>
        {/* aggiungere altre immagini + swiper */}
        <img
          className={styles.Card__Img}
          src={currentRoom.imageLocation}
          alt={currentRoom.name}
        />
      </div>
    </div>
  );
}
