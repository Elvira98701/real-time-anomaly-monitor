import Image from "next/image";
import Link from "next/link";

import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <main className={styles.home}>
      <Container className={styles.homeInner}>
        <Image
          className={styles.homeImage}
          src="/images/bg.jpg"
          width={458}
          height={640}
          alt=""
        />
        <div className={styles.homeContent}>
          <h1 className={styles.homeTitle}>Real-time Anomaly Monitor</h1>
          <Link className={styles.homeLink} href="/monitoring">
            Start
          </Link>
        </div>
      </Container>
    </main>
  );
};
