import VerticalLevel from "../VerticalLevel/VerticalLevel";
import styles from "./VerticalLevel.module.scss";
function VerticalLevelList(props) {
  const { list } = props;
  return (
    <div className={styles.list}>
      {list.map((item, i) => {
        return <VerticalLevel background={item.color} key={i}></VerticalLevel>;
      })}
    </div>
  );
}
export default VerticalLevelList;
