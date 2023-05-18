import Button from "@/components/modules/Button";
import Categories from "@/components/modules/Categories";
import SearchBox from "@/components/modules/SearchBox";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/Data";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBox />
      <Categories />
      <Button />  
      <CarsPage data={cars} />
    </>
  );
}
