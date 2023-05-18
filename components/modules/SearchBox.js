import { useState } from "react";
import styles from "./SearchBox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();

  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const clickhandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter valid max and min prices!!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <span>
          ${" "}
          <input
            placeholder="Enter Min Price"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </span>
        <span>
          ${" "}
          <input
            placeholder="Enter Max Price"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </span>
      </div>
      <button onClick={clickhandler}>Search</button>
    </div>
  );
}

export default SearchBox;
