"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { useForm } from "react-hook-form";

interface Props {
  placeholder?: string;
  className?: string;
}

export const TextInput: React.FC<Props> = ({ placeholder, className }) => {
  const formMethods = useForm();
  const { register, handleSubmit } = formMethods;

  const onSubmit =

  return (
    <div>
      <div></div>
    </div>
  );
};
