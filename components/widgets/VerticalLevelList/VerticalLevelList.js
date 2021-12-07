import VerticalLevel from "../VerticalLevel/VerticalLevel";
import styles from "./VerticalLevel.module.scss";
function VerticalLevelList(props) {
  const { list } = props;
  return (
    <div className={styles.list}>
      {list.map((item, i) => {
        return <VerticalLevel background={item.color}></VerticalLevel>;
      })}
    </div>
  );
}
export default VerticalLevelList;
