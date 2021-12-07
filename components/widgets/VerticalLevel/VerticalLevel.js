import styles from "./VerticalLevel.module.scss";
function VerticalLevel(props) {
  const { background } = props;
  
  return (
    <div
      className={styles.item}
      style={{
        background: background,
        position: "relative",
        width: "0.6rem",
        height: "2rem",
      }}
    ></div>
  );
}

export default VerticalLevel;
