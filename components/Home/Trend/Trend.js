import styles from "./Trend.module.scss";
import TransparentCardContainer from "../../ui/TransparentCardContainer/TransparentCardContainer";
import VerticalLineCircle from "../../widgets/VerticalLineCircle/VerticalLineCircle";
function Trend(props) {
  return (
    <TransparentCardContainer>
      <div
        style={{
          display: "flex",
          height: "100%",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-evenly",
          height: "70%",
        }}
      >
        <VerticalLineCircle height={2}></VerticalLineCircle>
        <VerticalLineCircle  height={4}></VerticalLineCircle>
        <VerticalLineCircle  height={3}></VerticalLineCircle>
        <VerticalLineCircle></VerticalLineCircle>
        <VerticalLineCircle></VerticalLineCircle>
        <VerticalLineCircle></VerticalLineCircle>
        <VerticalLineCircle></VerticalLineCircle>
        <VerticalLineCircle></VerticalLineCircle>
      </div>
    </TransparentCardContainer>
  );
}

export default Trend;
