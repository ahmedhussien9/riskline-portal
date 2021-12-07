import styles from "./VerticalLineCircle.module.scss";
function VerticalLineCircle(props) {
  const height = { props };
  const hg = height * 10;
  return (
    <div className={styles.numberCircle} style={{ height: hg + "%" }}></div>
  );
}

export default VerticalLineCircle;
