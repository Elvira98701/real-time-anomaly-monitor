"use client";

import clsx from "clsx";

import { SpiritCard, useGetSpirits } from "@/entities/spirit";
import { CaptureButton } from "@/features/capture-spirit";
import { ErrorText } from "@/shared/ui";

import styles from "./styles.module.scss";

interface SpiritsListProps {
  className?: string;
}

export const SpiritsList = ({ className }: SpiritsListProps) => {
  const { data, isLoading, isError, error } = useGetSpirits();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <ErrorText text={error.message} />;
  }

  return (
    <div className={clsx(styles.spirits, className)}>
      {data?.map((spirit) => (
        <SpiritCard
          key={spirit.id}
          spirit={spirit}
          actions={<CaptureButton disabled={spirit.status === "Captured"} />}
        />
      ))}
    </div>
  );
};
