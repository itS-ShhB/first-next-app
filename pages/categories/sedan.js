import carsData from "../../data/carsData";
import CarList from "./../../components/templates/CarList";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return (
    <div>
      <CarList data={sedanCars} />
    </div>
  );
}

export default Sedan;
