import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.descriptionHolder}>
        <p>
          Dies ist ein Beispielprojekt um die Funktionsweise und Struktur von
          Next.js 13 zu domonstrieren
        </p>
        <br />
        <p>
          Über den ersten Link der Navigations-Bar können bestehende
          Journal-Einträge angesehen werden. Über den zweiten Link kann ein
          neuer Eintrag erstellt werden.
        </p>
      </div>
    </main>
  );
}
