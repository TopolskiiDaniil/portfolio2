import styles from './burgerButton.module.scss';

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

export default function BurgerButton({ onClick, isOpen }: Props) {

  return (
    <button
      className={`${styles['burger-button']} ${isOpen ? styles['burger-button--open'] : ''}`}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      onClick={onClick}>
      <span className={styles.icon}></span>
    </button>
  );
}