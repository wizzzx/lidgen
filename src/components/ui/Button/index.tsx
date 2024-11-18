"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  label: string;
  children?: React.ReactNode;
  redirect?: string;
}

export const Button: React.FC<Props> = ({
  className,
  label,
  children,
  redirect,
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (redirect) {
      router.push(redirect);
    } else {
      console.log("Этой страницы не существует.");
    }
  };

  return (
    <button
      className={cn(styles.button, className)}
      onClick={handleRedirect}
      type={"submit"}
    >
      {label}
      {children}
    </button>
  );
};
