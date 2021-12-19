import styles from "./RiskBreakDown.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import { ProgressBar } from "../../widgets/ProgressLine/ProgressLine";
function RiskBreakDown(props) {
  const { alert } = props;
  const redLineWidthInPixel = 100; // 100%;
  const maxRiskLevelNum = 5;
  const width = redLineWidthInPixel / maxRiskLevelNum;
  return (
    <TransparentCardContainer>
      {alert && alert.country ? (
        <div className={styles.container}>
          <h5 className={styles.title}>Risk breakdown</h5>
          {alert &&
            alert.country.sections.map((section, i) => {
              return (
                <ProgressBar
                  width={width}
                  percent={section.risk_level}
                  key={i}
                  label={section.name}
                />
              );
            })}
        </div>
      ) : (
        ""
      )}
    </TransparentCardContainer>
  );
}

export default RiskBreakDown;
