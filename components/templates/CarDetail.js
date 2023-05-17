import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import styles from "./CarDetail.module.css";

function CarDetail(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    image,
    location,
    price,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.title}>
        {name} {model}
      </h3>
      <div className={styles.box}>
        <div className={styles.detail}>
          <Company />
          <h4>Company</h4>
          <span>{name}</span>
        </div>
        <div className={styles.detail}>
          <Model />
          <h4>Model</h4>
          <span>{model}</span>
        </div>
        <div className={styles.detail}>
          <Calender />
          <h4>First registration</h4>
          <span>{year}</span>
        </div>
        <div className={styles.detail}>
          <Road />
          <h4>KMs driven</h4>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.detail}>
          <Location />
          <h4>Location</h4>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.box}>
        <h3>Extra Information </h3>
        <p>{description}</p>
      </div>
      <div className={styles.box}>
        <div className={styles.detail}>
          <h4>Price</h4>
          <span>$ {price}</span>
        </div>
      </div>
      <button className={styles.button}>buy</button>
    </div>
  );
}

export default CarDetail;
