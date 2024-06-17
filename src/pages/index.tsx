import styles from "../css/pageCss/index.module.css";

import NavList from "@/components/NavList";
import ContentList from "../components/ContentList";
import UnderMenu from "@/components/UnderMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <main className={styles.main}>
        <div className={styles.navList}>
          <NavList />
        </div>
        <div className={styles.contentList}>
          <ContentList text={"home"} />
        </div>
      </main>
      <div className={styles.underMenu}>
        <UnderMenu />
      </div>
    </div>
  );
}
