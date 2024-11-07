"use client";

import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { useMediaQuery } from "react-responsive";

const navigationButtons = [
  {
    title: "Клиентам",
    route: "/clients",
  },
  {
    title: "Партнерам",
    route: "/partners",
  },
  {
    title: "Категория 1",
    route: "/cat1",
  },
  {
    title: "Категория 2",
    route: "/cat2",
  },
  {
    title: "Категория 3",
    route: "/cat3",
  },
  {
    title: "Блог",
    route: "/blog",
  },
];

export const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo_link}>
        <span className={styles.highlight_logo}>MFO</span> PLATFORM
      </Link>
      {!isMobile ? (
        <nav>
          <ul className={styles.nav_buttons}>
            {navigationButtons.map((button, index) => (
              <li key={index}>
                <Link href={button.route}>{button.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div>is mobile</div>
      )}
    </header>
  );
};
