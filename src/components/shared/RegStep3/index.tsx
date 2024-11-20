"use client";

import React from "react";
import styles from "./index.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { SmartForm } from "@/components/hocs/SmartForm";

type FormData = {
  firstName: string;
  lastName: string;
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

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <SmartForm submit={handleSubmit(onSubmit)} form={RegistrationForm}>
      asd
    </SmartForm>
  );
};
