import Image from "next/image";
import styles from "./CardHeaderTitleTimeImage.module.scss";
function CardHeaderTitleTimeImage(props) {
  let { title, time, image } = props;

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
        <p className={styles.time}>
          <time>{time}</time> Hours ago
        </p>
      </div>
      <div className={styles.imgWrap}>
        <Image src="/egypt.png" alt="logo" height={30} width={30}></Image>
      </div>
    </div>
  );
}

export default CardHeaderTitleTimeImage;
