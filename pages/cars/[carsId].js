import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsDetails from '../../components/templates/CarsDetails'

function CarDetail() {
  const router = useRouter();
  const { carsId } = router.query;
  const carDetails = carsData[carsId - 1];
  return <div>
    <CarsDetails {...carDetails} />
  </div>;
}

export default CarDetail;
