import { Container } from "@/shared/ui";
import { SpiritsList } from "@/widgets/spirits-list";

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
