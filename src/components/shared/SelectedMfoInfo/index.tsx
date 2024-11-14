"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import Image from "next/image";

interface Props {
  className?: string;
}

export const SelectedMfoInfo: React.FC<Props> = ({ className }) => {
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
              <span className={styles.bold}>Юридическое название:</span>
              Общество с ограниченной ответственностью "Гига Займ"
            </li>
            <li>
              <span className={styles.bold}>ИНН:</span>9900039378
            </li>
            <li>
              <span className={styles.bold}>ОГРН:</span>2366373308233
            </li>
            <li>
              <span className={styles.bold}>Юридическая информация:</span>
              Свидетельство о внесении сведений о юридическом лице в
              государственный реестр микрофинансовых организаций за
              регистрационным номером{" "}
              <span className={styles.underlined_blue}>2120177002077</span>.
              Дата внесения 11.09.2021г.
            </li>
          </ul>
        </div>
        <div className={styles.info_section}>
          <h3 className={styles.section_header}>Общая информация</h3>
          <ul className={styles.list}>
            <li>
              <span className={styles.bold}>Бренд:</span>Гига займ
            </li>
            <li>
              <span className={styles.bold}>Номер в перечне МФО в ЦБ:</span>
              21105730000002
            </li>
            <li>
              <span className={styles.bold}>Сайт:</span>
              <span className={styles.underlined_blue}>gigazaym.ru</span>
            </li>
            <li>
              <span className={styles.bold}>email:</span>
              <span className={styles.underlined_blue}>gigazaym@inbox.ru</span>
            </li>
            <li>
              <span className={styles.bold}>Номер телефона:</span>+7 (499)
              299-00-00
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
          <p>
            ООО МФК «ГигаЗайм» — система моментального электронного кредитования
            — предоставляет онлайн микрозаймы «под ключ», начиная с рассмотрения
            заявки до получения клиентом денежных средств. Клиенты получают
            займы без посещения офиса. «ГигаЗайм» — выгодная альтернатива
            банковскому кредитованию — получить займ онлайн можно в течение 24
            часов. Обработка заявок на заём 24/7 без выходных. Клиенты получают
            займы без посещения офиса. «ГигаЗайм»
          </p>
        </div>
      </div>
    </Container>
  );
};
