"use client";

import React from "react";
import styles from "./index.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";
import cn from "classnames";

type FormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  passportSeries: string;
  passportNumber: string;
  passportIssueDate: string;
  passportCode: string;
  address: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  middleName: yup.string().required(),
  birthDate: yup.date().required().typeError("Введите корректную дату"),
  passportSeries: yup
    .string()
    .matches(/^\d{4}$/, "Серия паспорта должна состоять из 4 цифр")
    .required("Серия паспорта обязательна"),
  passportNumber: yup
    .string()
    .matches(/^\d{6}$/, "Номер паспорта должен состоять из 6 цифр")
    .required("Номер паспорта обязателен"),
  passportIssueDate: yup
    .date()
    .required("Дата выдачи паспорта обязательна")
    .typeError("Введите корректную дату"),
  passportCode: yup
    .string()
    .matches(/^\d{3}-\d{3}$/, "Код подразделения должен быть в формате 000-000")
    .required("Код подразделения обязателен"),
  address: yup.string().required("Адрес обязателен"),
});

export const RegStep3: React.FC = () => {
  const formMethods = useForm({ resolver: yupResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SmartForm
      submit={handleSubmit(onSubmit)}
      form={formMethods}
      className={styles.container}
    >
      <div className={styles.main_container}>
        <header className={styles.header_container}>
          <h2 className={styles.section_header}>Заполните анкету</h2>
          <p className={cn(styles.subheader, "hidden-mobile")}>
            Это не займет много времени
          </p>
        </header>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Фамилия</label>
          <input type="text" {...register("lastName")} />
          <p>{errors.lastName?.message}</p>
        </div>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Имя</label>
          <input type="text" {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
        </div>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Отчество</label>
          <input type="text" {...register("middleName")} />
          <p>{errors.middleName?.message}</p>
        </div>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Дата рождения</label>
          <input type="date" {...register("birthDate")} />
          <p>{errors.birthDate?.message}</p>
        </div>
        <div className={cn(styles.passport_container, "hidden-mobile")}>
          <div className={styles.thin_input_item}>
            <label htmlFor="">Серия</label>
            <input type="text" {...register("passportSeries")} />
            <p>{errors.passportSeries?.message}</p>
          </div>
          <div className={styles.thin_input_item}>
            <label htmlFor="">Номер</label>
            <input type="text" {...register("passportNumber")} />
            <p>{errors.passportNumber?.message}</p>
          </div>
        </div>
      </div>
      <div className={styles.add_container}>
        <div className={styles.passport_container}>
          <div className={styles.thin_input_item}>
            <label htmlFor="">Серия</label>
            <input type="text" {...register("passportSeries")} />
            <p>{errors.passportSeries?.message}</p>
          </div>
          <div className={styles.thin_input_item}>
            <label htmlFor="">Номер</label>
            <input type="text" {...register("passportNumber")} />
            <p>{errors.passportNumber?.message}</p>
          </div>
        </div>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Дата выдачи паспорта</label>
          <input type="date" {...register("passportIssueDate")} />
          <p>{errors.passportIssueDate?.message}</p>
        </div>
        <div className={styles.passport_code_input}>
          <label htmlFor="">Код подразделения</label>
          <input type="text" {...register("passportCode")} />
          <p className={styles.p}>
            ОТДЕЛЕНИЕМ УФМС РОССИИ ПО ВОРОНЕЖСКОЙ ОБЛ. ЛЕНИНСКОГО РАЙОНА Г.
            ВОРОНЕЖА
          </p>
          <p>{errors.passportCode?.message}</p>
        </div>
        <div className={styles.wide_input_item}>
          <label htmlFor="">Адрес</label>
          <input type="text" {...register("address")} />
          <p>{errors.address?.message}</p>
        </div>
        <div className={styles.button_container}>
          <button type={"submit"} className={styles.single_mfo_button}>
            Отправить в 1 МФО
          </button>
          <button type={"submit"} className={styles.multiple_mfo_button}>
            Отправить во все МФО
          </button>
        </div>
      </div>
    </SmartForm>
  );
};
