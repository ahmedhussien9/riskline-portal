import styles from "./RiskBreakDown.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import { ProgressBar } from "../../widgets/ProgressLine/ProgressLine";
function RiskBreakDown(props) {
  const { alert } = props;

  return (
    <TransparentCardContainer>
      {alert && alert.country ? (
        <div className={styles.container}>
          <h5 className={styles.title}>Risk breakdown</h5>
          {alert &&
            alert.country.sections.map((section, i) => {
              return (
                <ProgressBar
                  width={10}
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
