import Categories from "@/components/modules/Categories";
import SearchBox from "@/components/modules/SearchBox";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/Data";

function index() {
  return (
    <>
      <SearchBox />
      <Categories />
      <CarsPage data={carsData} />
    </>
  );
}

export default index;
