"use client";

import React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  placeholder?: string;
  className?: string;
}

export const TextInput: React.FC<Props> = ({ className, placeholder }) => {
  const schema = yup.object().shape({
    review: yup
      .string()
      .required("Поле необходимо!")
      .min(10, "Отзыв должен содержать от 10 до 1000 символов.")
      .max(1000, "Отзыв должен содержать от 10 до 1000 символов."),
  });

  const formMethods = useForm({ resolver: yupResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SmartForm
      submit={handleSubmit(onSubmit)}
      form={formMethods}
      className={className}
    >
      <div className={styles.form_control}>
        <label></label>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          {...register("review", {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 10,
              matchPattern: (value) =>
                /^[\u0400-\u04FFa-zA-Z0-9\s.,!?]+$/.test(value),
            },
          })}
        />
      </div>
      <button type={"submit"} className={styles.submit_button}>
        Отправить отзыв
      </button>
    </SmartForm>
  );
};
