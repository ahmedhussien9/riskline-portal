import styles from "./LatestAlerts.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import CardHeaderTitleTimeImage from "../../widgets/CardHeaderTitleTimeImage/CardHeaderTitleTimeImage";
import Paragraph from "../../widgets/Paragraph/Paragraph";
import TitleBottomIcon from "../../widgets/TitleBottomIcon/TitleBottomIcon";
import LeafSvg from "./../../../public/leaf.svg";
import VerticalLevelList from "../../widgets/VerticalLevelList/VerticalLevelList";
import AverageCard from "../../widgets/AverageCard/AverageCard";
import { Fragment } from "react";

function LatestAlerts(props) {
  const { alert, city } = props;
  return (
    <TransparentCardContainer isNotOverBackground={true}>
      {alert && alert.country ? (
        <Fragment>
          <div className={styles.countryInfoContainer}>
            <CardHeaderTitleTimeImage
              city={city}
              title={alert.country.name}
              image={alert.country.flag}
              time={alert.published_at}
            ></CardHeaderTitleTimeImage>
            <Paragraph
              p={alert.title}
              color={"#fff"}
              padding={"0.5rem 1rem 2rem 1rem"}
              opactiy={"0.8"}
              height={"100px"}
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
                  <VerticalLevelList
                    riskLevel={alert.risk_level}
                  ></VerticalLevelList>
                </TitleBottomIcon>
              </div>
            </div>
            <div className={styles.riskLevelWrapper}>
              <AverageCard
                riskLevel={alert.risk_level}
                city={city}
              ></AverageCard>
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
