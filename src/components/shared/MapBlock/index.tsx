"use client";

import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import { Container } from "@/components/shared/Container";

interface Props {
  className?: string;
}

const YandexMap: React.FC = () => {
  useEffect(() => {
    const loadMap = async () => {
      const { YMap, YMapDefaultSchemeLayer } = await import(
        "../../../lib/ymaps"
      );
      const map = new YMap(document.getElementById("map")!, {
        location: {
          center: [37.588144, 55.733842],
          zoom: 10,
        },
      });
      map.addChild(new YMapDefaultSchemeLayer());
    };

    loadMap();
  }, []);
};

export const MapBlock: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <div id={"map"} className={styles.container} />
    </Container>
  );
};

export default YandexMap;
