import Categories from "@/components/modules/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/Data";

function index() {
  return (
    <>
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default index;
