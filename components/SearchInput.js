import { Fragment } from "react";
import styles from "./SearchInput.module.scss";

function SearchInput(props) {
  const { list, data } = props;
  
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <input
        className={styles.input}
        list={list}
        onChange={(e) => handleInput(e)}
        placeholder="Search A Location To See Its Risk Data..."
      />
      <datalist id={list}>
        {data &&
          data.map((item) => {
            return <option value={item} key={item} />;
          })}
      </datalist>
    </Fragment>
  );
}

export default SearchInput;
