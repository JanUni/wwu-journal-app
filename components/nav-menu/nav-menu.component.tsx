import Link from "next/link";
import styles from "./nav-menu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/journal-entries"}>Journal-Einträge</Link>
        </li>
        <li>
          <Link href={"/create-entry"}>Neuer Journal-Eintrag</Link>
        </li>
      </ul>
    </nav>
  );
}
