import carsData from "@/data/Data";
import { useRouter } from "next/router";
import CarDetail from "@/components/templates/CarDetail";

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];

  return <CarDetail {...carDetail} />;
}

export default CarDetails;
