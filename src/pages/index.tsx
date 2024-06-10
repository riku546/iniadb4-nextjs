import styles from "../css/pageCss/index.module.css";

import NavList from "@/components/NavList";
import ContentList from "../components/ContentList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navList}>
        <NavList />
      </div>
      <div className={styles.contentList}>
        <ContentList />
      </div>
    </main>
  );
}
