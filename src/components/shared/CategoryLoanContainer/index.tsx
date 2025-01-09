import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Container } from "@/components/shared/Container";
import {
  CategoryData,
  CityData,
  TypeData,
} from "@/components/shared/CategoryLoanContainer/data";

interface Props {
  className?: string;
}

export const CategoryLoanContainer: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <h2 className={styles.header}>Займы на карту</h2>
      <div className={styles.categories_wrapper}>
        <div className={styles.link_container}>
          <h3 className={styles.section_header}>По городу</h3>
          <div className={styles.links}>
            {CityData.map((item, index) => (
              <div key={index} className={styles.link_item_blue}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.link_container}>
          <h3 className={styles.section_header}>По назначению</h3>
          <div className={styles.links}>
            {CategoryData.map((item, index) => (
              <div key={index} className={styles.link_item_lightblue}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.link_container}>
          <h3 className={styles.section_header}>По еще чему-нибудь</h3>
          <div className={styles.links}>
            {TypeData.map((item, index) => (
              <div key={index} className={styles.link_item_purple}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
