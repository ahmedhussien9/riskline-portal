import styles from "./Paragraph.module.scss";
import { useTextTruncate } from "../../../Hooks/Truncate";

function Paragraph(props) {
  const { length, ending, p, color, padding, opacity, fontSize, fontFamily } =
    props;
  let options = {
    length: length,
    ending: ending,
  };

  const { text, setText } = useTextTruncate(p, options);
  return (
    <p
      className={styles.paragraph}
      style={{
        color: color,
        padding: padding,
        fontSize: fontSize,
        fontFamily: fontFamily,
        opacity: opacity,
      }}
    >
      {p}
    </p>
  );
}
export default Paragraph;
