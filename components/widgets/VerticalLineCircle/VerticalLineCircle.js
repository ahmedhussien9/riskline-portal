import styles from "./VerticalLineCircle.module.scss";
import React, { useEffect, useState } from "react";
export const VerticalLineCircle = ({ height, percent }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(percent * height);
  }, [percent, height]);
  return (
    <div className={styles.progressDiv}>
      <div
        // data-for="main"
        // data-tip="hello world"
        // data-iscapture="true"
        className={styles.numberCircle}
      ></div>
      <div style={{ height: `${value}px` }} className={styles.progress}></div>
      {/* <ReactTooltip
        id="main"
        place={"right"}
        type={"light"}
        effect={"solid"}
        multiline={true}
      /> */}
    </div>
  );
};
