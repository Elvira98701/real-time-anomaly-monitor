import clsx from "clsx";

import styles from "./styles.module.scss";

interface ErrorTextProps {
  text: string;
  className?: string;
}

export const ErrorText = ({ text, className }: ErrorTextProps) => {
  return <p className={clsx(styles.error, className)}>{text}</p>;
};
