"use client";

import React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";

interface Props {
  placeholder?: string;
  className?: string;
}

export const TextInput: React.FC<Props> = ({ className, placeholder }) => {
  const formMethods = useForm();
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
        {errors.review?.type === "checkLength" && (
          <p className={styles.err_msg}>Минимальное количество символов: 10.</p>
        )}
        {errors.review?.type === "matchPattern" && (
          <p className={styles.err_msg}>Использованы недопустимые символы.</p>
        )}
      </div>
      <button type={"submit"} className={styles.submit_button}>
        Отправить отзыв
      </button>
    </SmartForm>
  );
};
