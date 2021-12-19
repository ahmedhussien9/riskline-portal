import styles from "./Trend.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import { VerticalLineCircle } from "../../widgets/VerticalLineCircle/VerticalLineCircle";
import ReactTooltip from "react-tooltip";
import React from "react";
function Trend(props) {
  const { alert } = props;

  const calculateLineTop = (risk_level_history) => {
    const riskValues = Object.values(risk_level_history);
    let top = Math.max(...riskValues) * 11.5;
    return top;
  };

  return (
    <TransparentCardContainer>
      {alert && alert.country && alert.country.risk_level_history ? (
        <div className={styles.trendWrapper}>
          <div className={styles.trendHeader}>
            <h5 className={styles.headerTitle}>Trend</h5>
            <h5 className={styles.headerTitle}>Past 12 Months</h5>
            <h5 className={styles.headerTitle}>High Risk</h5>
          </div>
          <div className={styles.trendMonthWrap}>
            <div
              className={styles.line}
              // style={{
              //   bottom: `${calculateLineTop(
              //     alert.country.risk_level_history
              //   )}%`,
              // }}
            ></div>
            <VerticalLineCircle
              height={alert.country.risk_level_history.January}
              percent={20}
            >
              <ReactTooltip />
            </VerticalLineCircle>
            <VerticalLineCircle height={5} percent={20}></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.March}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.April}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.May}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.June}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.July}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.August}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.August}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.September}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.October}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.November}
              percent={20}
            ></VerticalLineCircle>
            <VerticalLineCircle
              height={alert.country.risk_level_history.December}
              percent={20}
            ></VerticalLineCircle>
          </div>
        </div>
      ) : (
        ""
      )}
    </TransparentCardContainer>
  );
}

export default Trend;
