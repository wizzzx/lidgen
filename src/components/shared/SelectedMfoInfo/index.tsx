"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { MfoData } from "@/types/mfo_data";

interface Props {
  className?: string;
  mfo: MfoData;
}

export const SelectedMfoInfo: React.FC<Props> = ({ className, mfo }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <Image
        src={"/assets/images/gigazaym.png"}
        alt={"mfo logo"}
        width={524}
        height={109}
        className={styles.image}
        loading={"lazy"}
      />
      <div className={styles.info_sections_container}>
        <div className={styles.info_section}>
          <h3 className={styles.section_header}>Юридическая информация</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.bold}>Юридическое название:</span>{" "}
              {mfo?.regFullName}
            </li>
            <li>
              <span className={styles.bold}>ИНН:</span> {mfo?.regInn}
            </li>
            <li>
              <span className={styles.bold}>ОГРН: </span> {mfo?.regOgrn}
            </li>
            <li>
              <span className={styles.bold}>Юридическая информация:</span>{" "}
              Свидетельство о внесении сведений о юридическом лице в
              государственный реестр микрофинансовых организаций за
              регистрационным номером{" "}
              <span className={styles.underlined_blue}>{mfo?.regNumber}</span>.
              Дата внесения {mfo?.regDate}.
            </li>
          </ul>
        </div>
        <div className={styles.info_section}>
          <h3 className={styles.section_header}>Общая информация</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.bold}>Бренд:</span> {mfo?.regConcName}
            </li>
            <li>
              <span className={styles.bold}>Номер в перечне МФО в ЦБ:</span>{" "}
              {mfo?.regNumber}
            </li>
            <li>
              <span className={styles.bold}>Сайт:</span>{" "}
              <span className={styles.underlined_blue}>{mfo?.regSite}</span>
            </li>
            <li>
              <span className={styles.bold}>email:</span>{" "}
              <span className={styles.underlined_blue}>{mfo?.regEmail}</span>
            </li>
            <li>
              <span className={styles.bold}>Номер телефона:</span>{" "}
              {mfo?.regPhoneNumber}
            </li>
            <li>
              <span className={styles.bold}>Социальные сети:</span>
              <div className={styles.icons}>
                <Image
                  src={"/assets/icons/ip/ok.svg"}
                  alt={"ok.ru"}
                  width={48}
                  height={48}
                  loading={"lazy"}
                />
                <Image
                  src={"/assets/icons/ip/vk.svg"}
                  alt={"vk.com"}
                  width={48}
                  height={48}
                  loading={"lazy"}
                />
              </div>
            </li>
            <li>
              <span className={styles.bold}>Мобильное приложение:</span>
              <div className={styles.icons}>
                <Image
                  src={"/assets/icons/ip/gplay.png"}
                  alt={"gplay"}
                  width={123}
                  height={41}
                  loading={"lazy"}
                />
                <Image
                  src={"/assets/icons/ip/appstore.svg"}
                  alt={"appstore"}
                  width={123}
                  height={41}
                  loading={"lazy"}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.info_section}>
          <h3 className={styles.section_header}>О компании</h3>
          <p>{mfo?.regAbout}</p>
        </div>
      </div>
    </Container>
  );
};
