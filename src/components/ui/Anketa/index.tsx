"use client";

import React from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SmartForm } from "@/components/hocs/SmartForm";
import { useForm } from "react-hook-form";

interface Props {
  className?: string;
}

const schema = yup.object().shape({
  review: yup.string().required("Заполните все поля!"),
});

const formMethods = useForm({
  resolver: yupResolver(schema),
});
const {
  register,
  handleSubmit,
  formState: { errors },
} = formMethods;

const onSubmit = (data) => {
  console.log(data);
};

export const Anketa: React.FC<Props> = ({ className }) => {
  return (
    <SmartForm
      submit={handleSubmit(onSubmit)}
      form={formMethods}
      className={className}
    >
      <div className={styles.form_control}></div>
    </SmartForm>
  );
};
