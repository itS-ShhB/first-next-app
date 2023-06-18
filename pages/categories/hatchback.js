import carsData from "../../data/carsData";
import CarList from "./../../components/templates/CarList";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");
  return <CarList data={hatchbackCars} />;
}

export default Hatchback;
