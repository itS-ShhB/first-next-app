import styles from "./CarsDetails.module.css";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Image from "next/image";

function CarDetails(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <Image src={image} className={styles.image} alt="Car Image" />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First Registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Km&apos;s Driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price: </p>
          <span>$ {price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetails;
