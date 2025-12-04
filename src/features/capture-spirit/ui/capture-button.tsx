import clsx from "clsx";

import styles from "./styles.module.scss";

interface CaptureButtonProps {
  disabled?: boolean;
  className?: string;
}

export const CaptureButton = ({
  disabled = false,

  className,
}: CaptureButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      disabled={disabled}
    >
      Capture
    </button>
  );
};
