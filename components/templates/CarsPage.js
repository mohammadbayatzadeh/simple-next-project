import CarCard from "../modules/CarCard";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
