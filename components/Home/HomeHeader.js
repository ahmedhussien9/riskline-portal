import { Fragment } from "react";
import styles from "./HomeHeader.module.scss";
function HomeHeader() {
  return (
    <Fragment>
      <h1 className={styles.title}>Real-time global travel risk</h1>
      <h2 className={styles.secondTitle}>
        monitoring for | <span>Travel Management</span>
      </h2>
    </Fragment>
  );
}

export default HomeHeader;
