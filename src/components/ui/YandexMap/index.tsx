import { useEffect, useRef } from "react";

interface Props {
  className: string;
}

declare global {
  interface Window {
    ymaps?: any;
  }
}

const YandexMap: React.FC<Props> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadYandexMap = async () => {
      if (typeof window !== "undefined" && !window.ymaps) {
        if (!document.getElementById("yandex-map-script")) {
          const script = document.createElement("script");
          script.id = "yandex-map-script";
          script.src =
            "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ee986e19-547e-4cf9-a880-08498db6fb46";
          script.async = true;
          document.head.appendChild(script);

          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
          });
        }
      }

      if (window.ymaps) {
        window.ymaps.ready(() => {
          if (mapRef.current) {
            if (!window.ymaps.mapInstance) {
              const map = new window.ymaps.Map(mapRef.current, {
                center: [55.751244, 37.618423],
                zoom: 10,
              });

              window.ymaps.mapInstance = map;
            }
          }
        });
      }
    };

    loadYandexMap().then((res) => {
      console.log(res);
    });
  }, []);

  return <div ref={mapRef} className={className} />;
};

export default YandexMap;
