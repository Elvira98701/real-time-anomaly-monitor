import { SpiritsList } from "@/features/spirits-list";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const Monitoring = () => {
  return (
    <main className={styles.monitoring}>
      <Container>
        <h1 className={styles.monitoringTitle}>Monitoring spirits</h1>
        <SpiritsList />
      </Container>
    </main>
  );
};
