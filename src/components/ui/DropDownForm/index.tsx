"use client";

import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface Props {
  title?: string;
}

export const DropDownList: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [selectedValue, setSelectedValue] = React.useState<number | null>(3);
  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <>
      <h4 className={styles.header}>{title}</h4>
      <div className={styles.container}>
        <button onClick={handleOpen} className={styles.button}>
          <p>{selectedValue} года</p>
          <Image
            src={"/assets/icons/ui/drop_down_list_icon.svg"}
            alt={"arrow"}
            width={10}
            height={5}
          />
        </button>
        {isOpen && (
          <ul className={styles.list}>
            <li
              onClick={() => {
                handleSelect(1);
                handleOpen();
              }}
              className={styles.list_item}
            >
              1 год
            </li>
            <li
              onClick={() => {
                handleSelect(2);
                handleOpen();
              }}
              className={styles.list_item}
            >
              2 года
            </li>
            <li
              onClick={() => {
                handleSelect(3);
                handleOpen();
              }}
              className={styles.list_item}
            >
              3 года
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
