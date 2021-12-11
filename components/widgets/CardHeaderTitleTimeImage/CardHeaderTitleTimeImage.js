import Image from "next/image";
import { getTimeFormat } from "../../../helpers/CalculatePastTime";
import styles from "./CardHeaderTitleTimeImage.module.scss";
function CardHeaderTitleTimeImage(props) {
  let { title, time, image } = props;

  let pastTime = getTimeFormat(time);
  if (!image) {
    image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png";
  }
  if (!title) {
    title = "Philippines";
  }

  if (!time) {
    time = "8";
  }
  return (
    <div className={styles.card}>
      <div className={styles.infoWrap}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.time}>{pastTime}</p>
      </div>
      <div className={styles.imgWrap}>
        <Image src={image} alt="logo" height={30} width={30}></Image>
      </div>
    </div>
  );
}

export default CardHeaderTitleTimeImage;
