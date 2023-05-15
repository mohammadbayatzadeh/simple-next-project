import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/Data";

function index() {
  return <CarsPage data={carsData} />;
}

export default index;
