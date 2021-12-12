import styles from "./TitleBottomIcon.module.scss";

function TitleBottomIcon(props) {
  const {
    title,
    subTitle,
    children,
    padding,
    borderBottom,
    borderLeft,
    borderTop,
    borderRight,
    height,
  } = props;

  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <h6 className={styles.subTitle}>{subTitle}</h6>
      <div style={{ padding: padding, height: height }}>{children}</div>
    </div>
  );
}

export default TitleBottomIcon;
