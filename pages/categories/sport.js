import carsData from "../../data/carsData";
import CarList from "./../../components/templates/CarList";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport")
  return (
    <div><CarList data={sportCars} /></div>
  )
}

export default Sport