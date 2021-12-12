import styles from "./AverageCard.module.scss";
import TitleBottomIcon from "../../widgets/TitleBottomIcon/TitleBottomIcon";

function AverageCard(props) {
  const { riskLevel } = props;
  return (
    <div className={styles.levelAverageWrap}>
      <div className={styles.levelAverageHeaderWrap}>
        <TitleBottomIcon
          title={"Country Risk Level"}
          subTitle={"HIGH RISK"}
          borderRight={true}
        ></TitleBottomIcon>
      </div>
      <div className={styles.levelAverageValuesWrapper}>
        <div className={styles.numberWrap}>
          <p className={styles.value}>{riskLevel}</p>
        </div>
        <div className={styles.averageWrap}>
          <p className={styles.text}>OUT OF </p>
          <p className={styles.text}>10</p>
        </div>
      </div>
    </div>
  );
}
export default AverageCard;
