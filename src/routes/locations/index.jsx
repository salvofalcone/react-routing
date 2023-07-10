import { useNavigate } from "react-router-dom";

import { roomList } from "../../mocks/reservations.js";

import style from "../../styles/routes/Locations.module.scss";

export default function () {
  const navigate = useNavigate();


  const onHandleClick = (id) => navigate(`/locations/${id}`);

  // console.log(roomList);
  return (
    <div className={style.Locations}>
      <ul className={style.Menu}>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            alt="menu item icon"
          />
          Sull'acqua
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            alt="menu item icon"
          />
          Piscine incredibili
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt="menu item icon"
          />
          Vista mozzafiato
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg"
            alt="menu item icon"
          />
          Case galleggianti
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
            alt="menu item icon"
          />
          Agriturismi
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt="menu item icon"
          />
          Wow!
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg"
            alt="menu item icon"
          />
          Barche
        </li>
        <li className={style.Menu__Item}>
          <img
            className={style.Menu__Item__Img}
            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
            alt="menu item icon"
          />
          Stanze
        </li>
      </ul>

      <div className={style.Cards}>
        {roomList.map((room) => (
          <div className={style.Card} onClick={() => onHandleClick(room.id)}>
            <img
              src={room.imageLocation}
              alt={room.name}
              className={style.Card__Img}
            />
            <div className={style.Card__Info}>
              <p className={style.Title}>{room.name}</p>
              <p className={style.Locations}>{room.location}</p>
              <p className={style.Price}>
                <span className={style.Price__Bold}>{room.price}</span> € notte
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
