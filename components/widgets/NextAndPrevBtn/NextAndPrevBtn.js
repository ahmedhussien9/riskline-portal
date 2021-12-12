import styles from "./NextAndPrevBtn.module.scss";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NextAndPrevBtn(props) {
  const { disableNext, disablePrev } = props;

  const prev = () => {
    props.onClickPrev();
  };

  const next = () => {
    props.onClickNext();
  };

  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.button}`}
        onClick={prev}
        disabled={disablePrev}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </button>
      <button className={styles.button} onClick={next} disabled={disableNext}>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </button>
    </div>
  );
}

export default NextAndPrevBtn;
