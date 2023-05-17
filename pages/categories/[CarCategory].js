import CarsList from "@/components/modules/CarsList";
import carsData from "@/data/Data";
import { useRouter } from "next/router";
import React from "react";

function CarCategory() {
  const router = useRouter();
  const { CarCategory } = router.query;
  const Cars = carsData.filter((item) => item.category === CarCategory);

  return (
    <div>
      {Cars.length ? (
        <CarsList data={Cars} />
      ) : (
        <p>we do not have this category</p>
      )}
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default CarCategory;
