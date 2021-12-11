import styles from "./NextAndPrevBtn.module.scss";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NextAndPrevBtn(props) {
  const prev = () => {
    props.onClickPrev();
  };

  const next = () => {
    props.onClickNext();
  };

  return (
    <div className={styles.buttonWrapper}>
      <button className={`${styles.button}`} onClick={prev}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </button>
      <button className={styles.button} onClick={next}>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </button>
    </div>
  );
}

export default NextAndPrevBtn;
