import styles from "./logo.module.scss";

type Props = {
  isFooter?: boolean;
}

export const Logo = ({ isFooter }: Props) => {
  return (
    <div className={`${styles.logo} ${isFooter ? styles.logo__footer : ""}`}>
      <span className={styles.logo__icon}>{`<`}</span>
      <div className={styles.logo__text}>
        <span className={styles.logo__letter}>T</span>
        <span className={styles.logo__letter}>D</span>
      </div>
      <span className={styles.logo__icon}>{`/>`}</span>
    </div>
  );
};