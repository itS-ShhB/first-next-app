import carsData from "../../data/carsData";
import CarList from "./../../components/templates/CarList";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");
  return (
    <div>
      <CarList data={suvCars} />
    </div>
  );
}

export default Suv;
