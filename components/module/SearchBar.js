import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please enter Minimum and Maximum");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Enter Min-Price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Enter Min-Price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
