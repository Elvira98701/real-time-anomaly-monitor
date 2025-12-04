import { ReactNode } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface NotificationProps {
  children: ReactNode;
  className?: string;
}

export const Notification = ({ children, className }: NotificationProps) => {
  return <div className={clsx(styles.notification, className)}>{children}</div>;
};
