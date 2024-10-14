import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
