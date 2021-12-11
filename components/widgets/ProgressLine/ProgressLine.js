import React, { useEffect, useState } from "react";
import styles from "./ProgressLine.module.scss";
export const ProgressBar = ({ width, percent, label }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);
  return (
    <div className={styles.container}>
      <div className={styles.progressLabel}>
        <h5 className={styles.label}>{label.substring(0, 11 - 3)}</h5>
      </div>
      <div className={styles.progressDiv}>
        <div style={{ width: `${value}px` }} className={styles.progress}></div>
        <div className={styles.line} />
      </div>
    </div>
  );
};
