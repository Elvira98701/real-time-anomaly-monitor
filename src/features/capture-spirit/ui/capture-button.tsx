import clsx from "clsx";

import styles from "./styles.module.scss";

interface CaptureButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const CaptureButton = ({
  disabled = false,
  children,
  className,
}: CaptureButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
