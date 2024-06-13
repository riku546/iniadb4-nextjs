import styles from "../css/pageCss/index.module.css";

import NavList from "@/components/NavList";
import ContentList from "../components/ContentList";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.NavLayout}>
          <div className={styles.navList}>
            <NavList />
          </div>
        </div>
        <div className={styles.contentList}>
          <ContentList text={"home"} />
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <img src="/hamburger.png" alt="" width="100px" />
        </div>
        <div>
          <img src="/icon2.png" alt="" width="100px" />
        </div>
      </footer>
    </div>
  );
}
