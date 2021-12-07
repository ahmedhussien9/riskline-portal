import styles from "./TransparentCardContainer.module.scss";
function TransparentCardContainer(props) {
  const { children, isOverBackground } = props;
  return (
    <div
      className={`${styles.container} ${
        isOverBackground ? styles.isNotOverBackground : ""
      }`}
    >
      {children}
    </div>
  );
}

export default TransparentCardContainer;
