"use client";

import clsx from "clsx";

import { useCaptureSpirit } from "../api/use-capture-spirit";

import styles from "./styles.module.scss";

interface CaptureButtonProps {
  id: string;
  disabled?: boolean;
  className?: string;
}

export const CaptureButton = ({
  disabled = false,
  id,
  className,
}: CaptureButtonProps) => {
  const { mutate, isPending } = useCaptureSpirit(id);

  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      disabled={disabled}
      onClick={() => mutate()}
    >
      {isPending ? "Loading..." : "Capture"}
    </button>
  );
};
