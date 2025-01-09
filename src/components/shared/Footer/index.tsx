"use client";

import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

const FooterNavigationData = [
  {
    title: "Продукты и условия",
    route: "/products",
  },
  {
    title: "Техническая документация",
    route: "/tech_documentation",
  },
  {
    title: "Оферта",
    route: "/oferta",
  },
  {
    title: "О сервисе",
    route: "/about",
  },
  {
    title: "Подключение",
    route: "/connection",
  },
  {
    title: "Команды",
    route: "/teams",
  },
  {
    title: "FAQ",
    route: "/faq",
  },
  {
    title: "Безопасность",
    route: "/security",
  },
];

export const Footer: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.top_wrapper}>
          <p>© Сервис «Лидогенератор», 2022</p>
          <p>
            Остались вопросы? Звоните:{" "}
            <span className={styles.bold}>8 800 600 1776</span>
          </p>
          <p className={styles.underlined_blue}>Политика конфиденциальности</p>
        </div>
        <div>
          <h4 className={styles.section_header}>Меню</h4>
          <nav>
            <ul className={styles.nav_links}>
              {FooterNavigationData.map((item, i) => (
                <li key={i} className={styles.nav_item}>
                  <Link href={item.route}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.info_block}>
        <div className={styles.top}>
          <p className={styles.naming}>
            ООО ИА «МФО ПЛАТФОРМА» использует файлы cookie для повышения
            удобства пользователей и обеспечения должного уровня
            работоспособности сайта и сервисов. Cookie называются небольшие
            файлы, содержащие информацию о настройках и предыдущих посещениях
            веб-сайта. Если вы не хотите использовать файлы cookie, то можете
            изменить настройки браузера. Условия использования{" "}
            <Link href={"?"} className={styles.underlined}>
              смотрите здесь
            </Link>
          </p>
          <p>ИНН: 7723527345;</p>
          <p>ОГРН: 1047796964522;</p>
          <p>Адрес: 117638, г. Москва, улица Одесская, д. 2, этаж 19;</p>
          <p>ОКВЭД: 63.12</p>
        </div>
        <div className={styles.bot}>
          <p>
            Заемщик вправе направить обращение финансовому уполномоченному в
            соответствии со статьями 15-19 Федерального закона от 4 июня 2018
            года N 123-ФЗ «Об уполномоченном по правам потребителей финансовых
            услуг» одним из следующих способов:
          </p>
          <ul className={styles.laws_list}>
            <li className={styles.laws_list_item}>
              в электронной форме через личный кабинет на сайте финансового
              уполномоченного: finombudsman.ru.
            </li>
            <li className={styles.laws_list_item}>
              в письменной форме на бумажном носителе в адрес финансового
              уполномоченного: 119017, г. Москва, Старомонетный пер., дом 3,
              контактный номер телефона 8 (800) 200-00-10»
            </li>
            <li className={styles.laws_list_item}>
              {" "}
              Ссылка на официальный сайт Банка России в
              информационно-телекоммуникационной сети «Интернет»: https://cbr.ru
            </li>
            <li className={styles.laws_list_item}>
              {" "}
              Ссылка на страницу Банка России, содержащую государственный реестр
              микрофинансовых организаций: https://cbr.ru/microfinance/registry
            </li>
            <li className={styles.laws_list_item}>
              Регистрационный номер записи в государственном реестре
              микрофинансовых организаций:
            </li>
            <li className={styles.laws_list_item}>
              1703045008644 от 01.12.2017
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
