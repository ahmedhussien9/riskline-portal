import styles from "./LatestAlerts.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import CardHeaderTitleTimeImage from "../../widgets/CardHeaderTitleTimeImage/CardHeaderTitleTimeImage";
import Paragraph from "../../widgets/Paragraph/Paragraph";
import TitleBottomIcon from "../../widgets/TitleBottomIcon/TitleBottomIcon";
import LeafSvg from "./../../../public/leaf.svg";
import VerticalLevelList from "../../widgets/VerticalLevelList/VerticalLevelList";
import AverageCard from "../../widgets/AverageCard/AverageCard";
import { Fragment } from "react";
const LEVELS = [
  {
    color: "#33825B",
  },
  {
    color: "#33825B",
  },
  {
    color: "#44AE72",
  },
  {
    color: "#44AE72",
  },
  {
    color: "#FAC84A",
  },
  {
    color: "#FAC84A",
  },
  {
    color: "",
  },
  {
    color: "",
  },
];
function LatestAlerts(props) {
  const { alert } = props;
  return (
    <TransparentCardContainer isNotOverBackground={true}>
      {alert && alert.country ? (
        <Fragment>
          <div className={styles.countryInfoContainer}>
            <CardHeaderTitleTimeImage
              title={alert.country.name}
              image={alert.country.flag}
              time={alert.published_at}
            ></CardHeaderTitleTimeImage>
            <Paragraph
              p={alert.title}
              color={"#fff"}
              padding={"0.5rem 1rem 3rem 1rem"}
              opactiy={"0.8"}
              fontSize={"1.1rem"}
            ></Paragraph>
          </div>

          <div className={styles.countryStatistics}>
            <div className={styles.alertsWrapper}>
              <div className={styles.alertCategory}>
                <TitleBottomIcon
                  title={"Alert Category"}
                  subTitle={alert.category}
                  padding={"1.5rem 0rem 1.5em 0rem"}
                  borderRight={true}
                >
                  <LeafSvg width={30} height={30} fill={"#fff"} />
                </TitleBottomIcon>
              </div>
              <div className={styles.alertLevels}>
                <TitleBottomIcon
                  title={"Alert Level"}
                  subTitle={"Medium"}
                  padding={"1.5rem 0rem 1rem 0rem"}
                  borderRight={true}
                >
                  <VerticalLevelList list={LEVELS}></VerticalLevelList>
                </TitleBottomIcon>
              </div>
            </div>
            <div className={styles.riskLevelWrapper}>
    
              <AverageCard riskLevel={alert.risk_level}></AverageCard>
            </div>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </TransparentCardContainer>
  );
}

export default LatestAlerts;
