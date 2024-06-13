import styles from "../css/pageCss/index.module.css";

import NavList from "@/components/NavList";
import ContentList from "../components/ContentList";
import UnderMenu from "@/components/UnderMenu";

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
        <UnderMenu />
      </footer>
    </div>
  );
}
