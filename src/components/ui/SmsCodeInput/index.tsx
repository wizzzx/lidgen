import * as React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";

interface Props {
  className?: string;
}

export const SmsCodeInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div></div>
    </div>
  );
};
