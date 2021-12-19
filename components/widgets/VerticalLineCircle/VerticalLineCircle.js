import styles from "./VerticalLineCircle.module.scss";
import React, { useEffect, useState } from "react";
export const VerticalLineCircle = ({ height, percent }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(percent * height);
  }, [percent, height]);

  return (
    <div className={styles.progressDiv}>
      <div className={styles.numberCircle}></div>
      <div
        style={{ height: `${value + 30}px` }}
        className={styles.progress}
      ></div>
    </div>
  );
};
