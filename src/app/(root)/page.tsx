"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import { useForm, useWatch } from "react-hook-form";
import { Container } from "@/components/shared/Container";
import { SmartForm } from "@/components/hocs/SmartForm";

export default function Home() {
  const [activeSection, setActiveSection] = useState("borrower");
  const form = useForm<any>({
    reValidateMode: "onSubmit",
  });

  const amount: number = useWatch({
    control: form.control,
    name: "loan_data.amount",
  });

  const term: number = useWatch({
    control: form.control,
    name: "loan_data.terms",
  });

  return (
    <main>
      <Container>
        <SmartForm submit={() => console.log} form={form}>
          {/*    slider*/}
        </SmartForm>
      </Container>
    </main>
  );
}
