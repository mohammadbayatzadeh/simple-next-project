import CarsList from "@/components/modules/CarsList";
import carsData from "@/data/Data";
import { useRouter } from "next/router";

function Filter() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterCars = carsData.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filterCars.length) return <h3>Not Found!</h3>;
  return <CarsList data={filterCars} />;
}

export default Filter;
