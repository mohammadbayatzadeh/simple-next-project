import Location from "../icons/Location";
import styles from "./CarCard.module.css";

function CarCard(props) {
  const { name, model, year, distance, image, location, price } = props;
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <h3 className={styles.title}>{`${name} ${model}`}</h3>
      <p className={styles.details}>{`${year} / ${distance}km`}</p>
      <div className={styles.footer}>
        <p className={styles.price}>{`$ ${price}`}</p>
        <div className={styles.location}>
          <p>{`${location}`}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
