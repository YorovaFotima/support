import styles from "./header.module.css";
import { Menu } from "./menu";
function Header() {
  return (
    <header className={styles.menu1}>
      <h3>SUPPORT</h3>
      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export { Header };
