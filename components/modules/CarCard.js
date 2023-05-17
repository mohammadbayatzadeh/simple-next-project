import Link from "next/link";
import Location from "../icons/Location";
import styles from "./CarCard.module.css";

function CarCard(props) {
  const {id, name, model, year, distance, image, location, price } = props;
  return (
    <Link href={`/cars/${id}`}>
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
    </Link>
  );
}

export default CarCard;
