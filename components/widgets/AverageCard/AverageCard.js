import styles from "./AverageCard.module.scss";
function AverageCard() {
  return (
    <div className={styles.levelAverageWrap}>
      <div className={styles.numberWrap}>
        <p className={styles.value}>7</p>
      </div>
      <div className={styles.averageWrap}>
        <div className={styles.averageContainer}>
          <p className={styles.text}>OUT OF </p>
          <p className={styles.text}>10</p>
        </div>
      </div>
    </div>
  );
}
export default AverageCard;
