import styles from "./VerticalLevel.module.scss";
function VerticalLevel(props) {
  const { isActive } = props;

  return (
    <div className={`${styles.item} ${isActive ? styles.active : ""}`}></div>
  );
}

export default VerticalLevel;
