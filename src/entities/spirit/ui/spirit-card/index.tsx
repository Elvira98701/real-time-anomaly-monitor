import clsx from "clsx";
import Image from "next/image";

import { Spirit } from "../../model/schema";

import styles from "./styles.module.scss";

interface SpiritCardProps {
  spirit: Spirit;
  className?: string;
}

export const SpiritCard = ({ spirit, className }: SpiritCardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <Image
        className={styles.cardImage}
        src={spirit.image}
        width={300}
        height={400}
        alt=""
      />
      <div className={styles.cardContent}>
        <h2>{spirit.name}</h2>
        <div className={styles.cardInfo}>
          <span className={styles.cardInfoTitle}>Threat level:</span>
          <span
            className={styles.cardLevel}
            style={{
              backgroundColor: spirit.threatLevel.color,
            }}
          >
            {spirit.threatLevel.value}
          </span>
        </div>
        <div className={styles.cardInfo}>
          <span className={styles.cardInfoTitle}>Location:</span>{" "}
          {spirit.location}
        </div>
        <div className={styles.cardInfo}>
          <span className={styles.cardInfoTitle}>Status:</span>{" "}
          <span
            style={{
              color: spirit.status === "Active" ? "red" : "green",
            }}
          >
            {spirit.status}
          </span>
        </div>
      </div>
    </div>
  );
};
