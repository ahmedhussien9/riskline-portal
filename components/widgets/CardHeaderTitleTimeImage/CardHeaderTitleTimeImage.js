import Image from "next/image";
import { getTimeFormat } from "../../../helpers/CalculatePastTime";
import styles from "./CardHeaderTitleTimeImage.module.scss";
function CardHeaderTitleTimeImage(props) {
  let { title, time, image, city } = props;
  let pastTime = getTimeFormat(time);

  const getCity = () => {
    if (city && city.name) {
      return <span className={styles.subTitle}>{city.name}</span>;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.infoWrap}>
        <h2 className={styles.title}>
          {title} {getCity()}
        </h2>
        <p className={styles.time}>{pastTime}</p>
      </div>
      <div className={styles.imgWrap}>
        <Image src={image} alt="logo" height={30} width={30}></Image>
      </div>
    </div>
  );
}

export default CardHeaderTitleTimeImage;
