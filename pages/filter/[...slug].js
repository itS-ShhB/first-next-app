import carsData from "../../data/carsData";
import { useRouter } from "next/router";
import CarList from "../../components/templates/CarList";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );
  if (!filteredData.length) return <h3>Not Found !</h3>;
  return <CarList data={filteredData} />;
}

export default FilterCars;
