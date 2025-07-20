import { Button } from "../Button/Button";
import styles from "./TabItem.module.css";

export const TabItem = (props) => {
  return (
    <span className={styles.tab}>
      <Button size="large" {...props} />
    </span>
  )
};
