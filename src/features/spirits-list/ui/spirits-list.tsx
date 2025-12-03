"use client";

import clsx from "clsx";

import { SpiritCard } from "@/entities/spirit";

import { useGetSpirits } from "../api/use-get-spirits";

import styles from "./styles.module.scss";

interface SpiritsListProps {
  className?: string;
}

export const SpiritsList = ({ className }: SpiritsListProps) => {
  const { data, isLoading, isError, error } = useGetSpirits();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className={clsx(styles.spirits, className)}>
      {data?.map((spirit) => (
        <SpiritCard key={spirit.id} spirit={spirit} />
      ))}
    </div>
  );
};
