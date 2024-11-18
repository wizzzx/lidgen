import React, { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import PhoneInput from "react-phone-number-input/input";
import { Controller, useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  className?: string;
  phone?: string;
}

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Вам необходимо заполнить это поле!")
    .test(
      "isValidPhone",
      "Некорректный номер телефона",
      (value) => !!value && value.length > 8,
    ),
});

export const PhoneNumberInput: React.FC<Props> = ({ className, phone }) => {
  const formMethods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formMethods;

  const onSubmit = (data: Props) => {
    console.log(data, "Отправлено");
  };

  return (
    <SmartForm
      submit={handleSubmit(onSubmit)}
      form={formMethods}
      className={cn(styles.container, className)}
    >
      <label htmlFor="phone" className={styles.label}>
        Телефон
      </label>
      <Controller
        render={({ field }) => (
          <div className={styles.wrapper}>
            <PhoneInput
              {...field}
              defaultCountry={"RU"}
              placeholder={"Введите номер телефона"}
              className={styles.input}
            />
            {errors.phone && (
              <p className={styles.err_msg}>{errors.phone.message}</p>
            )}
          </div>
        )}
        name={"phone"}
        control={control}
      />
      <button type={"submit"} className={styles.button}>
        Продолжить
      </button>
    </SmartForm>
  );
};
