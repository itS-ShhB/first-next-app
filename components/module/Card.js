import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";
import Image from "next/image";

function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <Image src={image} className={styles.image} alt="Car Image" />
        <h4 className={styles.title}> {`${name} ${model}`} </h4>
        <p className={styles.detail}>{`${year} . ${distance}KM `}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
