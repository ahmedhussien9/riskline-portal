import VerticalLevel from "../VerticalLevel/VerticalLevel";
import styles from "./VerticalLevel.module.scss";
function VerticalLevelList(props) {
  const { riskLevel } = props;
  if (!riskLevel) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.list}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
        return (
          <VerticalLevel
            key={i}
            isActive={i < riskLevel * 2 ? true : false}
          ></VerticalLevel>
        );
      })}
    </div>
  );
}
export default VerticalLevelList;
